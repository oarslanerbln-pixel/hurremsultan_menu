import re

menu_path = r'c:\Users\oarsl\Desktop\Is Dosyasi\huerrem-menu-concept\webapp\src\data\menu.ts'
with open(menu_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace all newlines inside single quotes with \n
# Since this is tricky with regex if there are many strings, let's just do a manual replace of specific known bad strings.
content = content.replace("Pommes.\nExtra", "Pommes. \\nExtra")
content = content.replace("Pommes.\nEkstra", "Pommes. \\nEkstra")
content = content.replace("fries.\nExtra", "fries. \\nExtra")
content = content.replace("edilir.\nEkstra", "edilir. \\nEkstra")
content = content.replace("Guacamole.\nOptional", "Guacamole. \\nOptional")
content = content.replace("guacamole.\nOptional", "guacamole. \\nOptional")
content = content.replace("sos ile.\nİsteğe", "sos ile. \\nİsteğe")
content = content.replace("salat.\nMit", "salat. \\nMit")
content = content.replace("salad.\nWith", "salad. \\nWith")
content = content.replace("servis edilir.\nBiberiyeli", "servis edilir. \\nBiberiyeli")
content = content.replace("Paste.\nMit", "Paste. \\nMit")
content = content.replace("paste.\nWith", "paste. \\nWith")
content = content.replace("Parmesan.\nMit", "Parmesan. \\nMit")
content = content.replace("Parmesan.\nWith", "Parmesan. \\nWith")
content = content.replace("taçlandırılmış.\nÇıtır", "taçlandırılmış. \\nÇıtır")
content = content.replace("Energie.\nWahlweise", "Energie. \\nWahlweise")
content = content.replace("energy.\nChoice", "energy. \\nChoice")
content = content.replace("deneyimi.\nSeçime", "deneyimi. \\nSeçime")
content = content.replace("Espresso.\nIntensiv", "Espresso. \\nIntensiv")
content = content.replace("espresso.\nIntense", "espresso. \\nIntense")
content = content.replace("buluşuyor.\nYoğun", "buluşuyor. \\nYoğun")
content = content.replace("cremig.\nWahlweise", "cremig. \\nWahlweise")
content = content.replace("creamy.\nChoice", "creamy. \\nChoice")
content = content.replace("kremsi.\nSeçime", "kremsi. \\nSeçime")
content = content.replace("so!\nFruchtige", "so! \\nFruchtige")
content = content.replace("magical!\nFruity", "magical! \\nFruity")
content = content.replace("öyle!\nMeyveli", "öyle! \\nMeyveli")
content = content.replace("Süßkartoffel-Pulver.\nDer", "Süßkartoffel-Pulver. \\nDer")
content = content.replace("powder.\nThe", "powder. \\nThe")
content = content.replace("buluşuyor.\nKesinlikle", "buluşuyor. \\nKesinlikle")
content = content.replace("Matcha-Milchstraße.\nDein", "Matcha-Milchstraße. \\nDein")
content = content.replace("way.\nYour", "way. \\nYour")
content = content.replace("buluşuyor.\nMükemmel", "buluşuyor. \\nMükemmel")

with open(menu_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Fix applied.")
