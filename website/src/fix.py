
import os
import glob

base_dir = r'C:\AGY-Projects\B&L WorldWide\website\src\pages\divisions'
files = glob.glob(base_dir + '/**/*.jsx', recursive=True)

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = content.replace('!!text-white', '!text-white')
    
    if new_content != content:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print('Fixed ' + os.path.basename(file))

