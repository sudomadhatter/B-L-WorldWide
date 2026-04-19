import os
import re

directory = 'C:/AGY-Projects/B&L WorldWide/website/src/pages'
pattern = re.compile(r'<(a|button|Link)[^>]+className="[^"]*(bg-\[\#6096ba\]|bg-white/10)[^>]*>(.*?)</\1>', re.DOTALL)

for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith('.jsx'):
            file_path = os.path.join(root, file)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                matches = pattern.findall(content)
                if matches:
                    print(f"Found {len(matches)} matches in {file_path}")
