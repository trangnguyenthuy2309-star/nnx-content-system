# Slide Layout — Content with 3 Bullets + Callout

> Layout điển hình cho slide nội dung giữa carousel.

---

```
=== SLIDE LAYOUT: CONTENT-BULLETS ===

ROLE: Slides 2 to N-1 — main narrative beats. One idea per slide,
3 supporting points + 1 takeaway callout. The workhorse layout
of an xFinance carousel.

COMPOSITION ZONES:

ZONE A — Top-left (same position as Cover):
  Tag pill — examples: "GIAI ĐOẠN 1", "BƯỚC 02", "SAI LẦM 03",
  "NGUYÊN TẮC 04". Same shape and style as Cover for consistency.

ZONE B — Upper-left (~50% width, ~30% height):
  Display title — 2 lines:
    Line 1: charcoal #2D2A26
    Line 2: terracotta #C9572C
  With small star/sparkle accent (same as Cover).

ZONE C — Below title (~50% width):
  Short subtitle (1 line, ≤12 words) with vertical terracotta bar (3px).

ZONE D — Middle-left (~50% width, ~40% height):
  Three bullets, each consisting of:
    - Round icon (jade #2A8A7F fill, cream icon glyph inside, ~36px)
    - Body text (charcoal #2D2A26), with ONE key phrase highlighted
      in jade #2A8A7F or terracotta #C9572C
  Bullets separated by thin dashed cream-charcoal divider lines (1px).
  Bullet text: ≤14 words each, ideally 2 lines max.

ZONE E — Right side (40–50% width, ~70% height):
  Visual — single hero illustration / 3D group / photo per chosen
  style preset, representing the slide's main idea.
  Should NOT compete with text — leave breathing room.

ZONE F — Bottom-center (~60% width):
  Callout pill: rounded rectangle, cream fill, jade thin border (1.5px),
  small lightbulb / chart / shield icon on the left in jade,
  ONE-LINE takeaway (≤14 words) on the right.
  ONE key word in the callout highlighted in terracotta.

ZONE G — Bottom-right corner:
  Page counter "X/N" — same style as Cover (cream circle, charcoal text,
  thin border).

ZONE H — Bottom-left small:
  Optional: tiny dotted decorative pattern (matching Cover).

VISUAL HIERARCHY (top to bottom of attention):
1. Display title
2. Hero visual
3. Three bullets
4. Callout takeaway
5. Tag pill + page counter

CONTENT FIELDS TO FILL:
- {{TAG_LABEL}} — e.g., "GIAI ĐOẠN 1" or "SAI LẦM 02"
- {{TITLE_LINE_1}} / {{TITLE_LINE_2}}
- {{SUBTITLE}}
- {{BULLET_1_TEXT}} — Vietnamese, ≤14 words; mark which phrase to highlight
- {{BULLET_2_TEXT}}
- {{BULLET_3_TEXT}}
- {{BULLET_1_ICON}} / {{BULLET_2_ICON}} / {{BULLET_3_ICON}} — short
   English description of each icon (e.g., "wheat ears", "handshake",
   "warning triangle")
- {{HERO_VISUAL_DESCRIPTION}} — English description of what to draw
- {{CALLOUT_TEXT}} — Vietnamese ≤14 words, with terracotta highlight
   on key word
- {{CALLOUT_ICON}} — e.g., "lightbulb", "chart with upward arrow"
- {{SLIDE_NUMBER}} / {{TOTAL_SLIDES}}

CONSISTENCY NOTE for slide ≥ 2:
Add this sentence to the prompt: "Maintain the EXACT visual system
from the previous reference image (slide 1) — same tag pill style,
same page counter style, same background decoration motifs, same
illustration treatment, same typography hierarchy."

=== END SLIDE LAYOUT ===
```
