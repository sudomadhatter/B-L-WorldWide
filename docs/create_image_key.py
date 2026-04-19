import os
import re
from collections import defaultdict

docs_dir = 'docs/website_content/'
image_key_file = 'docs/image_key.md'

# Find all markdown and HTML image tags
# Markdown format: ![alt](url)
# HTML format: <img src="url" ...>
md_regex = re.compile(r'!\[.*?\]\((.*?)\)')
html_regex = re.compile(r'<img[^>]+src=["\'](.*?)["\']', re.IGNORECASE)

image_map = defaultdict(set)

# Scan through all markdown files
for filename in os.listdir(docs_dir):
    if filename.endswith(".md"):
        filepath = os.path.join(docs_dir, filename)
        try:
            with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
                
                # Find all markdown images
                for img_url in md_regex.findall(content):
                    if img_url:
                    	image_map[img_url].add(filename)
                
                # Find all HTML images
                for img_url in html_regex.findall(content):
                    if img_url:
                        image_map[img_url].add(filename)
                        
        except Exception as e:
            print(f"Error reading {filename}: {e}")

# Write out the image key
with open(image_key_file, 'w', encoding='utf-8') as f:
    f.write("# Image Mapping Key\n\n")
    f.write("This document maps all referenced images to the specific markdown pages they appear on.\n\n")
    
    if not image_map:
        f.write("*No images found in the documents.*\n")
    else:
        for img_url in sorted(image_map.keys()):
            f.write(f"### Image: `{img_url}`\n")
            f.write(f"**Used in:**\n")
            for page in sorted(image_map[img_url]):
                f.write(f"- [{page}](file:///c:/AGY-Projects/B&L%20WorldWide/docs/website_content/{page})\n")
            f.write("\n")

print(f"Image key generated with {len(image_map)} images.")
