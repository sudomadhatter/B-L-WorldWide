import os
import time
from collections import defaultdict
from google import genai
from google.genai import types

api_key = os.environ.get("GEMINI_API_KEY")
if not api_key:
    print("Error: Please set the GEMINI_API_KEY environment variable.")
    exit(1)

client = genai.Client(api_key=api_key)

docs_dir = 'docs/website_content/'
img_dir = os.path.join(docs_dir, 'images')

# Build the map again since files are renamed
md_files = [f for f in os.listdir(docs_dir) if f.endswith(".md")]
image_map = defaultdict(set)

import re
md_regex = re.compile(r'!\[.*?\]\((.*?)\)')
html_regex = re.compile(r'<img[^>]+src=["\'](.*?)["\']', re.IGNORECASE)

def extract_filename(url):
    return url.split('/')[-1]

for filename in md_files:
    filepath = os.path.join(docs_dir, filename)
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
        for img_url in md_regex.findall(content):
            if img_url:
                image_map[extract_filename(img_url)].add(filename)
        for img_url in html_regex.findall(content):
            if img_url:
                image_map[extract_filename(img_url)].add(filename)

img_files = os.listdir(img_dir)
results = []

print(f"Describing {len(img_files)} images...")

for idx, img_file in enumerate(img_files):
    pages = image_map.get(img_file, set())
    page_string = ", ".join(sorted(pages)) if pages else "Unreferenced"
    
    img_path = os.path.join(img_dir, img_file)
    
    try:
        # We upload the file to gemini natively
        file_obj = client.files.upload(file=img_path)
        
        response = client.models.generate_content(
            model='gemini-2.5-flash',
            contents=[
                file_obj,
                "Describe precisely what is in this image in a single, short sentence. Do not add conversational fluff."
            ]
        )
        description = response.text.strip()
        print(f"[{idx+1}/{len(img_files)}] {img_file}: {description}")
        
    except Exception as e:
        description = f"Error generating description: {e}"
        print(f"[{idx+1}/{len(img_files)}] Failed {img_file}: {e}")
        
    # Append to results
    results.append({
        'file': img_file,
        'pages': page_string,
        'description': description
    })
    
    # Simple rate limiting per iteration
    time.sleep(2)

# Write output markdown
out_file = 'docs/image_key_labeled.md'
with open(out_file, 'w', encoding='utf-8') as f:
    f.write("# Visual Image Key\n\n")
    f.write("A meticulous mapping of all 125 remaining pristine images with AI-generated visual descriptions.\n\n")
    for r in sorted(results, key=lambda x: x['pages']):
        f.write(f"### `{r['file']}`\n")
        f.write(f"**Description**: {r['description']}\n")
        f.write(f"**Used in**: {r['pages']}\n\n")

print(f"Finished. Saved to {out_file}")
