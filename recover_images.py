import os

print("Starting recovery...")

with open('docs/image_key_labeled.md', 'r', encoding='utf-8') as f:
    content = f.read()

blocks = content.split('### ')
blocks = blocks[1:]

renamed_count = 0
img_dir = os.path.join('website', 'public', 'images')

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
        prefix = first_page[5:-3]
    else:
        prefix = first_page.lower()
        
    prefix = prefix.replace('e281a0digital-currencys', 'digital-currency')
        
    bad_name = f'{prefix}_{filename}'
    
    if filename.startswith(prefix + '_'):
        good_name = filename
    elif prefix == 'unreferenced':
        good_name = f'unreferenced_{filename}'
    else:
        good_name = f'{prefix}_{filename}'
        
    bad_path = os.path.join(img_dir, bad_name)
    good_path = os.path.join(img_dir, good_name)
    
    if os.path.exists(bad_path) and bad_path != good_path:
        os.rename(bad_path, good_path)
        renamed_count += 1
        print(f"Fixed: {bad_name} -> {good_name}")

print(f"Total fixed: {renamed_count}")
