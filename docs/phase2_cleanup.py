import os
import re
from collections import defaultdict

docs_dir = 'docs/website_content/'
img_dir = os.path.join(docs_dir, 'images')

# Determine unused vs used
md_files = [f for f in os.listdir(docs_dir) if f.endswith(".md")]
img_files = set(os.listdir(img_dir))

image_map = defaultdict(set)

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

print(f"Found {len(image_map)} images currently referenced in Markdown.")

# Rename logic
rename_map = {}
page_counters = defaultdict(int)

for old_name, pages in image_map.items():
    if old_name not in img_files:
        continue # File doesn't exist locally

    ext = old_name.split('.')[-1]
    
    if len(pages) == 1:
        # Single page usage
        page = list(pages)[0]
        prefix = page.replace('page_', '').replace('post_', '').replace('.md', '')
        page_counters[prefix] += 1
        new_name = f"{prefix}_{page_counters[prefix]:02d}.{ext}"
    else:
        # Shared usage
        prefix = 'shared'
        page_counters[prefix] += 1
        new_name = f"{prefix}_{page_counters[prefix]:02d}.{ext}"
        
    rename_map[old_name] = new_name

print(f"Generated {len(rename_map)} new semantic names.")

# Perform markdown updates
for filename in md_files:
    filepath = os.path.join(docs_dir, filename)
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    changed = False
    new_content = content
    for old_name, new_name in rename_map.items():
        if old_name in new_content:
            new_content = new_content.replace(old_name, new_name)
            changed = True
            
    if changed:
         with open(filepath, 'w', encoding='utf-8') as f:
             f.write(new_content)

# Perform physical renames
for old_name, new_name in rename_map.items():
    old_path = os.path.join(img_dir, old_name)
    new_path = os.path.join(img_dir, new_name)
    try:
        os.rename(old_path, new_path)
    except Exception as e:
        print(f"Error renaming {old_name} -> {new_name}: {e}")

# Phase 3: Purge unreferenced files
remaining_files = set(os.listdir(img_dir))
referenced_new_names = set(rename_map.values())

purged = 0
for f in remaining_files:
    if f not in referenced_new_names:
        os.remove(os.path.join(img_dir, f))
        purged += 1

print(f"Phase 2 & 3 complete: Renamed successfully, and purged {purged} unused images.")
