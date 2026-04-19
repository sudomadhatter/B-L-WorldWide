import re
import os

with open('docs/image_key_labeled.md', 'r', encoding='utf-8') as f:
    content = f.read()

blocks = content.split('### ')
blocks = blocks[1:]

mapping = []
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
    
    # User said: "keep the page they came from e.g. home_air-cargo.01.jpg"
    # Oh wait! "home_air-cargo.01.jpg" implies `[Page]_[OriginalFile]`.
    # But wait, what if Original is 'home_04.png' and it's unreferenced? "unreferenced_home_04.png"
    # What if it's 'air-cargo_01.jpg' and page is 'air-cargo'? Then 'air-cargo_air-cargo_01.jpg'?
    # Let's deduplicate prefix if the filename already starts with it.
    
    if filename.startswith(prefix + '_'):
        new_name = filename
    elif prefix == 'unreferenced':
        new_name = f'unreferenced_{filename}'
    else:
        new_name = f'{prefix}_{filename}'
        
    mapping.append((filename, new_name))

for old, new in mapping:
    print(f"{old} -> {new}")
