# Slide Layout — Data / Stat (Số liệu chủ đạo)

> Layout cho slide có 1 con số chủ đạo. Số liệu IS the visual.

---

```
=== SLIDE LAYOUT: DATA-STAT ===

ROLE: A slide that hangs on a single hero number — survey result,
percentage, ratio, key financial figure. The number itself is the
visual centerpiece. Use sparingly (1–2 of these per carousel max).

COMPOSITION ZONES:

ZONE A — Top-left:
  Tag pill, e.g., "DATA", "THỐNG KÊ", "SỐ LIỆU 2024".
  Same style as other slides for consistency.

ZONE B — Center-left or full-center (depending on visual choice):
  HERO NUMBER — extremely large, terracotta #C9572C, bold display weight.
  Examples of valid hero numbers:
    "73%"
    "1 trên 4"
    "12.5 triệu"
    "x3 lần"
    "60 ngày"
  Number sized to dominate ~30–40% of canvas height.
  Optional small unit / suffix in jade #2A8A7F (e.g., "%" or "đ" smaller).

ZONE C — Just below the hero number:
  ONE short label (charcoal #2D2A26) explaining what the number measures.
  ≤14 words, no full sentences. Example:
    "người Việt chưa có quỹ dự phòng đủ 3 tháng chi tiêu"
    "tỷ lệ thất bại của startup giai đoạn 0–2 năm"
  Vertical terracotta bar (3px) optional at left.

ZONE D — Right side or bottom-right (~35% width):
  Optional supporting visual — keep it abstract:
    - Simple stylized chart motif (NOT a real chart with data)
    - A related 3D object (a coin, a calendar, a small bank)
    - Geometric data motif (concentric arcs, dotted progress ring)
  NEVER fabricate a chart with fake data points.

ZONE E — Bottom-center (~60% width):
  Source attribution OR insight pill:
    - Attribution: "Theo [nguồn], 2024" — small charcoal italic
    - OR insight pill: rounded rectangle with takeaway one-liner

ZONE F — Bottom-right corner:
  Page counter "X/N" — same style as other slides.

VISUAL HIERARCHY:
1. Hero number (dominant, ~40% of slide attention)
2. Number label
3. Supporting visual
4. Source / insight
5. Tag + counter

CONTENT FIELDS TO FILL:
- {{TAG_LABEL}}
- {{HERO_NUMBER}} — e.g., "73%" or "1 trên 4"
- {{NUMBER_UNIT}} — optional smaller suffix (e.g., "/năm")
- {{NUMBER_LABEL}} — Vietnamese, ≤14 words explaining the number
- {{SUPPORTING_VISUAL_DESC}} — English description of motif/object
- {{SOURCE_OR_INSIGHT}} — attribution string OR insight one-liner
- {{SLIDE_NUMBER}} / {{TOTAL_SLIDES}}

ANTI-PATTERNS — never:
- Show a fully drawn realistic chart with fake numbers
- Use a number that contradicts the source
- Use percentages without a clear "of what" label
- Stack two competing big numbers in one slide

CONSISTENCY:
Same as other slides — reference previous slide's visual system
in the prompt for slide ≥ 2.

=== END SLIDE LAYOUT ===
```
