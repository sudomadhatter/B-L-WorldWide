import re
with open('C:/Users/dlohn/.gemini/antigravity/brain/db62d6e4-f6ee-4c84-8218-d9eead31584e/architecture-inner-pages.md', 'r', encoding='utf-8') as f:
    content = f.read()

# I will replace the Button Rule section
new_button_rule = '''### CTA Button Standards (Updated)
All Call-to-Action (CTA) buttons on division pages MUST use the premium gradient-hover standard established on the VA & HUD Housing page.
**Crucially, all buttons must use pure white text (!text-white) to prevent global link overrides.**

1. **Light Backgrounds (Primary Template)**:
`jsx
<a 
  href="..." 
  className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#1b263b] !text-white font-semibold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-xl"
>
  <div className="absolute inset-0 bg-gradient-to-r from-[#274c77] to-[#1b263b] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  <span className="relative z-10">Button Text</span>
</a>
`

2. **Dark Backgrounds (Glass Template)**:
`jsx
<a 
  href="..." 
  className="group relative inline-flex items-center justify-center px-8 py-4 bg-white/10 !text-white font-semibold rounded-full overflow-hidden backdrop-blur-md border border-white/20 transition-all hover:scale-105 hover:shadow-xl"
>
  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  <span className="relative z-10">Button Text</span>
</a>
`'''

# We will just draft the implementation_plan.md later. Let's do research on all files to see exactly how many buttons are there.
