import re

with open('styles.css', 'r') as f:
    css = f.read()

# 2. Header: subtle nav hover states using teal or navy
# .site-nav a:hover { background: rgba(59, 167, 255, 0.12); } -> Let's change this to teal (95, 167, 161)
css = css.replace('rgba(143, 211, 209, 0.12)', 'rgba(95, 167, 161, 0.12)') # if the earlier python script replaced it
css = css.replace('background: linear-gradient(135deg, var(--navy), #145da4)', 'background: linear-gradient(135deg, var(--navy), var(--teal))')
css = css.replace('#145da4', 'var(--teal)')
css = css.replace('#1769b7', 'var(--teal)')

# 3. Hero: warm-to-aqua background glow
# radial-gradient(circle, rgba(143, 211, 209, 0.2), rgba(238, 223, 203, 0.24) 42%, transparent 68%) -> update Hero pseudo-element
hero_after_old = r"\.hero::after\s*\{[^}]+\}"
hero_after_new = """.hero::after {
  top: 118px;
  right: 0;
  width: min(520px, 72vw);
  height: min(520px, 72vw);
  border-radius: 50%;
  background: radial-gradient(circle, var(--glow), rgba(238, 223, 203, 0.35) 42%, transparent 72%);
  filter: blur(12px);
  z-index: -1;
}"""
css = re.sub(hero_after_old, hero_after_new, css)

# 4. Quick question buttons: pill-like cards. 
# .question-card { border-radius: 18px; -> Let's make it 999px for pill-like
css = re.sub(r'\.question-card\s*\{([^\}]+)border-radius:\s*18px;([^\}]+)\}', r'.question-card {\1border-radius: 999px;\2}', css)
# .question-card > span[aria-hidden] { border-radius: 14px; -> 50%
css = re.sub(r'\.question-card > span\[aria-hidden\]\s*\{([^\}]+)border-radius:\s*14px;([^\}]+)\}', r'.question-card > span[aria-hidden] {\1border-radius: 50%;\2}', css)

# Hover states pastel
css = css.replace('background: rgba(255, 255, 255, 0.94);', 'background: var(--surface-soft);')

# 5. Answer preview card: 
css = re.sub(r'\.answer-preview\s*\{([^\}]+)border-radius:\s*22px;([^\}]+)\}', r'.answer-preview {\1border-radius: 24px;\2}', css)
# "Light glass / soft white background" -> It's already linear-gradient(145deg, rgba(255, 255, 255, 0.92), rgba(244, 247, 251, 0.8))
# Let's adjust gradient to use warm colors
css = css.replace('rgba(244, 247, 251, 0.8)', 'var(--bg-soft)')
css = css.replace('rgba(244, 247, 251, 0.82)', 'var(--bg-soft)')
css = css.replace('rgba(244, 247, 251, 0.66)', 'var(--bg-soft)')

# 8. Typography: Serif for hero/main headlines
# Already configured h1, h2 with var(--serif) in existing CSS. Let's make sure h3 uses it for section headings.
# Actually the prompt says "Serif for hero/main headlines. Clean sans-serif for UI text and buttons."
# Currently h3 { line-height: 1.2; } Let's check where it applies.
# If I need to apply it:
css = css.replace('h1,\nh2 {', 'h1,\nh2,\nh3 {')

with open('styles.css', 'w') as f:
    f.write(css)

