import re

with open('styles.css', 'r') as f:
    content = f.read()

# Variables mapping
content = content.replace('--blue:', '--navy:')
content = content.replace('var(--blue)', 'var(--navy)')

content = content.replace('--electric:', '--aqua:')
content = content.replace('var(--electric)', 'var(--aqua)')

content = content.replace('--blue-soft:', '--mint:')
content = content.replace('var(--blue-soft)', 'var(--mint)')

# Since old --aqua is now --teal
# Wait, let's be careful. Old --aqua: #2f8f8b. Let's rename old --aqua to --teal.
# But we just renamed --electric to --aqua.
# To avoid conflict, let's use temporary names.

with open('styles.css', 'r') as f:
    content = f.read()

content = content.replace('var(--aqua)', 'var(--TMP_TEAL)')
content = content.replace('--aqua:', '--TMP_TEAL:')

content = content.replace('var(--blue)', 'var(--navy)')
content = content.replace('--blue:', '--navy:')

content = content.replace('var(--electric)', 'var(--aqua)')
content = content.replace('--electric:', '--aqua:')

content = content.replace('var(--blue-soft)', 'var(--mint)')
content = content.replace('--blue-soft:', '--mint:')

content = content.replace('var(--TMP_TEAL)', 'var(--teal)')
content = content.replace('--TMP_TEAL:', '--teal:')

content = content.replace('var(--terra)', 'var(--terracotta)')
content = content.replace('--terra:', '--terracotta:')

# Replace hardcoded RGBA values
# Old blue: 15, 61, 120 -> New navy: 35, 66, 92
content = re.sub(r'15,\s*61,\s*120', '35, 66, 92', content)

# Old electric: 59, 167, 255 -> New aqua: 143, 211, 209
content = re.sub(r'59,\s*167,\s*255', '143, 211, 209', content)

# Old sand: 237, 227, 210 -> New sand: 238, 223, 203
content = re.sub(r'237,\s*227,\s*210', '238, 223, 203', content)

# Old tealish/aqua (47, 143, 139) -> New teal: 95, 167, 161
content = re.sub(r'47,\s*143,\s*139', '95, 167, 161', content)

# Update root variables block
root_old = r":root\s*\{[^}]+\}"
root_new = """:root {
  --bg: #F8F4EC;
  --bg-soft: #F4EEE4;
  --surface: #ffffff;
  --surface-soft: #fffaf0;
  --text: #1D232B;
  --muted: #6F7277;
  --navy: #23425C;
  --mint: #B8E3DD;
  --aqua: #8FD3D1;
  --sand: #EEDFCB;
  --glass: rgba(255, 255, 255, 0.72);
  --teal: #5FA7A1;
  --terracotta: #D98C6B;
  --apricot: #F0B38A;
  --line: rgba(35, 66, 92, 0.12);
  --glow: rgba(143, 211, 209, 0.22);
  --shadow: 0 24px 70px rgba(35, 66, 92, 0.08);
  --radius: 8px;
  --radius-small: 8px;
  --max-width: 1160px;
  --serif: "Playfair Display", Georgia, serif;
  --sans: "Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}"""
content = re.sub(root_old, root_new, content)

# Write back
with open('styles.css', 'w') as f:
    f.write(content)

