# Slide Layout — Cover (Slide 1)

> Hero title + subtitle + visual + CTA. Slide đầu carousel — định visual system cho cả bộ.

---

```
=== SLIDE LAYOUT: COVER ===

ROLE: Slide 1 of N — establish the visual system the rest of the
carousel will follow. Strongest hook moment. Should make viewer
swipe to slide 2.

COMPOSITION ZONES (left-text + right-visual is default; can flip
or use full-bleed with text panel):

ZONE A — Top-left (8% inset from edges):
  Tag pill: small jade or charcoal pill with tiny icon + label.
  Examples: "FINANCE SERIES", "MONEY 101", "CASE STUDY".
  Background: jade #2A8A7F or charcoal #2D2A26.
  Text: cream #FAF6F0, ALL-CAPS, small.

ZONE B — Upper-left (~50% width, ~35% height):
  Display title — 2 lines:
    Line 1: charcoal #2D2A26
    Line 2: terracotta #C9572C
  With small decorative star/sparkle accent (jade or turmeric) near title.

ZONE C — Just below title (~50% width):
  Subtitle (1 line, ≤14 words) with thin terracotta vertical bar (3px)
  to the left.
  Optional secondary descriptor below subtitle in smaller body text,
  often with a small jade icon (like a wave / chart line / arrow).

ZONE D — Right side (40–50% width, full slide height):
  Hero visual — 3D objects on pedestals, vector illustration, or photo
  (per chosen style preset). Should preview the carousel content
  (e.g., a timeline strip showing all stages, or a single hero object
  representing the topic).

ZONE E — Bottom-center:
  CTA pill (terracotta #C9572C fill, cream text):
    "Vuốt để xem tiếp" or "Vuốt sang để khám phá" or similar.
  Small swipe-icon on the left side of the pill.

ZONE F — Bottom-right corner:
  Page counter circle: "1/N" (where N = total slide count).
  Cream fill, charcoal text, thin charcoal border (1.5px).
  Diameter approximately 80–100px on a 1080×1080 canvas.

ZONE G — Bottom-left small:
  Optional: tiny dotted decorative pattern or brand mark (very subtle).

VISUAL HIERARCHY (top to bottom of attention):
1. Display title (dominant)
2. Hero visual
3. Subtitle
4. CTA pill
5. Tag pill + page counter

CONTENT FIELDS TO FILL (replace these in the actual prompt):
- {{TAG_LABEL}} — short, ALL-CAPS, ≤3 words
- {{TITLE_LINE_1}} — Vietnamese, charcoal, ≤4 words
- {{TITLE_LINE_2}} — Vietnamese, terracotta, ≤4 words
- {{SUBTITLE}} — Vietnamese, ≤14 words, 1 line
- {{SECONDARY_DESCRIPTOR}} — optional, Vietnamese, ≤10 words
- {{HERO_VISUAL_DESCRIPTION}} — English description of what the hero
   visual should show — this guides ChatGPT
- {{CTA_LABEL}} — Vietnamese, ≤6 words (e.g., "Vuốt để xem tiếp")
- {{TOTAL_SLIDES}} — number (e.g., "6")

=== END SLIDE LAYOUT ===
```
