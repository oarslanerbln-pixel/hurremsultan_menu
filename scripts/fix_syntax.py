import re

def main():
    with open('../src/data/menu.ts', 'r', encoding='utf-8') as f:
        content = f.read()

    # Split the file by object boundaries roughly
    # Actually, the simplest fix:
    # 1. Replace `category: 'Fresh Homemade',` with `subcategory: 'Fresh Homemade',\n    category: 'drinks',`
    # BUT we might have duplicate categories.
    
    # We know the duplicate comes from my previous `re.sub` script that blindly inserted `imageUrl: '', category: ...`
    # Let's clean up line by line.
    
    with open('../src/data/menu.ts', 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    cleaned_lines = []
    
    in_item = False
    seen_category = False
    seen_subcat = False
    seen_imageUrl = False
    
    for line in lines:
        if "{" in line and "id:" not in line and "name:" not in line:
            in_item = True
            seen_category = False
            seen_subcat = False
            seen_imageUrl = False
            cleaned_lines.append(line)
            continue
            
        if "}" in line and "name:" not in line and "description:" not in line:
            in_item = False
            cleaned_lines.append(line)
            continue
            
        if in_item:
            # check for duplicate category
            if re.match(r'^\s*category:', line):
                if seen_category:
                    # Duplicate category! We turn it into subcategory if we haven't seen one
                    if "Hürrem Kombis" in line:
                        if not seen_subcat:
                            cleaned_lines.append(line.replace('category:', 'subcategory:'))
                            seen_subcat = True
                        continue
                    else:
                        if not seen_subcat:
                            cleaned_lines.append(line.replace('category:', 'subcategory:'))
                            seen_subcat = True
                        continue
                seen_category = True
                
                # Also ensure category is strictly typed
                if "Fresh Homemade" in line or "Smoothies" in line or "Homemade Iced Tea" in line or "Softdrinks" in line:
                    line = line.replace('category:', 'subcategory:')
                    cleaned_lines.append(line)
                    cleaned_lines.append("    category: 'drinks',\n")
                    seen_subcat = True
                    continue
                elif "Hürrem Kombis" in line:
                    line = "    category: 'kombis',\n"
                    cleaned_lines.append(line)
                    continue
                    
            if re.match(r'^\s*imageUrl:', line):
                if seen_imageUrl:
                    continue # Skip duplicate
                seen_imageUrl = True
                
        cleaned_lines.append(line)

    with open('../src/data/menu.ts', 'w', encoding='utf-8') as f:
        f.writelines(cleaned_lines)

if __name__ == '__main__':
    main()
