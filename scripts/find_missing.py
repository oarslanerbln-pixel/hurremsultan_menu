import re

with open('src/data/menu.ts', 'r', encoding='utf-8') as f:
    content = f.read()

missing = []
for match in re.finditer(r'id:\s*\'([^\']+)\'.*?name:\s*\{\s*DE:\s*\'([^\']+)\'(.*?)\}', content, re.DOTALL):
    block = match.group(0)
    if 'imageUrl:' not in block or "imageUrl: ''" in block or 'imageUrl: ""' in block:
        missing.append(f'{match.group(1)} | {match.group(2)}')

with open('missing_images.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(missing))
