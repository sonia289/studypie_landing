#!/usr/bin/env python3
import re

# Read the file
with open('/src/imports/Frame2087325452-73-5916.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace all font patterns
content = content.replace("font-['Spoqa_Han_Sans_Neo:Regular',sans-serif]", "font-['Spoqa_Han_Sans_Neo']")
content = content.replace("font-['Spoqa_Han_Sans_Neo:Medium',sans-serif]", "font-['Spoqa_Han_Sans_Neo'] font-medium")
content = content.replace("font-['Spoqa_Han_Sans_Neo:Bold',sans-serif]", "font-['Spoqa_Han_Sans_Neo'] font-bold")

# Write back
with open('/src/imports/Frame2087325452-73-5916.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Font classes updated successfully!")
