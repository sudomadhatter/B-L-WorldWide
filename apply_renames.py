import os
import re

print("Starting to parse image_key...")

with open('docs/image_key_labeled.md', 'r', encoding='utf-8') as f:
    content = f.read()

blocks = content.split('### ')
blocks = blocks[1:]

mapping = {}
for block in blocks:
    lines = block.strip().split('\n')
    filename = lines[0].replace('`', '').strip()
    
    used_in = 'unreferenced'
    for line in lines:
        if line.startswith('**Used in**:'):
            used_in = line.replace('**Used in**:', '').strip()
            break
            
    pages = [p.strip() for p in used_in.split(',')]
    first_page = pages[0]
    
    if first_page.startswith('page_'):
        prefix = first_page[5:-3] # remove 'page_' and '.md'
    else:
        prefix = first_page.lower()
        
    prefix = prefix.replace('e281a0digital-currencys', 'digital-currency')
        
    if filename.startswith(prefix + '_'):
        new_name = filename
    elif prefix == 'unreferenced':
        new_name = f'unreferenced_{filename}'
    else:
        new_name = f'{prefix}_{filename}'
        
    mapping[filename] = new_name

print("Mapping generated. Total items:", len(mapping))

# 1. Rename files in public/images
img_dir = os.path.join('website', 'public', 'images')
print(f"Target directory for renaming: {img_dir}")
renamed_count = 0

if os.path.exists(img_dir):
    for filename in os.listdir(img_dir):
        if filename in mapping:
            old_path = os.path.join(img_dir, filename)
            new_name = mapping[filename]
            new_path = os.path.join(img_dir, new_name)
            
            # Avoid renaming to the exact same name
            if old_path != new_path:
                print(f"Renaming: {filename} -> {new_name}")
                os.rename(old_path, new_path)
                renamed_count += 1
else:
    print(f"Directory not found: {img_dir}")

print(f"Total renamed images: {renamed_count}")

# 2. Find and replace in source code
src_dir = 'website'
replaced_count = 0

for root, dirs, files in os.walk(src_dir):
    if 'node_modules' in root or '.git' in root or 'dist' in root or '.next' in root:
        continue
    for file in files:
        if file.endswith(('.jsx', '.js', '.css', '.tsx', '.ts', '.md', '.json', '.html')):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                try:
                    original_content = f.read()
                except UnicodeDecodeError:
                    continue
            
            new_content = original_content
            for old_name, new_name in mapping.items():
                if old_name in new_content and old_name != new_name:
                    new_content = new_content.replace(old_name, new_name)
            
            if new_content != original_content:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                replaced_count += 1
                print(f"Updated references in: {path}")

print(f"Total source files patched: {replaced_count}")
print("Finished!")
