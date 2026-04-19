import os
import re

directory = 'C:/AGY-Projects/B&L WorldWide/website/src/pages'
# Find any <a> or <Link> that has a className with 'px-' and 'py-', suggesting it's a button.
pattern = re.compile(r'(<a|<Link)[^>]+className="[^"]*px-[^"]*py-[^"]*"[^>]*>([\s\S]*?)(</a>|</Link>)', re.DOTALL)

for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith('.jsx'):
            file_path = os.path.join(root, file)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                matches = pattern.finditer(content)
                for match in matches:
                    print(f"File: {file_path}")
                    print(f"Button:\n{match.group(0)}")
                    print("-" * 50)
