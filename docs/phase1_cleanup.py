import os
import re

docs_dir = 'docs/website_content/'
img_dir = os.path.join(docs_dir, 'images')

size_pattern = re.compile(r'-(\d+x\d+)\.(jpg|jpeg|png|webp|gif)$', re.IGNORECASE)
scaled_pattern = re.compile(r'-scaled\.(jpg|jpeg|png|webp|gif)$', re.IGNORECASE)

# All physical image files
all_images = set(os.listdir(img_dir))

def get_base_name(filename):
    m = size_pattern.search(filename)
    if m:
        return filename[:m.start()] + '.' + m.group(2)
    m2 = scaled_pattern.search(filename)
    if m2:
        return filename[:m2.start()] + '.' + m2.group(1)
    return None

# Find variants and check if their base exists
variants_to_delete = set()
base_redirects = {}

for img in all_images:
    base = get_base_name(img)
    if base and base in all_images:
        variants_to_delete.add(img)
        base_redirects[img] = base
    elif base:
        # The base doesn't exist, we must keep this variant
        pass

print(f"Identified {len(variants_to_delete)} variants with existing base files safely deletable.")

# 1. Update Markdown Links
for filename in os.listdir(docs_dir):
    if filename.endswith(".md"):
        filepath = os.path.join(docs_dir, filename)
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()

        changed = False
        
        # Regex substitution function to replace any matched URL if it's in base_redirects
        # Need to handle URL parts, e.g. "https://domain.com/images/1200-300x200.jpg" it ends with the variant
        def replacer(match):
            full_match = match.group(0)
            for var, base in base_redirects.items():
                if var in full_match:
                    return full_match.replace(var, base)
            return full_match
        
        # We can just replace the strings directly since filenames are fairly unique
        new_content = content
        for var, base in base_redirects.items():
             if var in new_content:
                 new_content = new_content.replace(var, base)
                 changed = True
                 
        if changed:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated links in {filename}")

# 2. Delete Variant Images
for var in variants_to_delete:
    var_path = os.path.join(img_dir, var)
    try:
        os.remove(var_path)
    except Exception as e:
        print(f"Failed to delete {var}: {e}")

print("Phase 1 complete: Links updated and variants deleted.")
