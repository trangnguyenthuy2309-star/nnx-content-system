# Negative Prompt Block — copy nguyên vào MỌI ChatGPT prompt

> **KHÔNG SỬA.** Đặt ở **cuối prompt**, sau content block.
> Mục đích: chặn ChatGPT đưa thêm yếu tố off-brand vào ảnh.

---

```
=== NEGATIVE — DO NOT INCLUDE ===

VISUAL:
- No watermarks, no logos other than NNX.
- No stock-photo clichés (forced handshakes, cheesy thumbs up, group of
  people pointing at laptop, exaggerated worried face about money).
- No cold corporate blue, no neon colors, no rainbow gradients,
  no purple-pink fintech vibes, no Web3 / crypto bro aesthetics.
- No mesh gradient backgrounds, no glass-morphism overload,
  no chrome / metallic 3D liquid blobs.
- No emojis as primary visual elements.
- No clip-art icons, no low-quality vectors, no Microsoft Office clip art.

TEXT:
- No misspelled Vietnamese — verify every diacritic before output.
- No bilingual bleeding: do not insert random English / Chinese / Japanese
  / Korean characters as decoration unless content requires.
- No Latin filler ("Lorem ipsum", "placeholder text", "your text here").
- No ALL-CAPS body sentences (only short tags ≤2 words can be ALL-CAPS).
- No drop shadows on text. No neon glow. No double-stroked outlines.
- No fake unrealistic numbers / fake URLs / fake @handles / fake QR codes
  unless content explicitly specifies them.

COLOR DISCIPLINE:
- No more than 3 brand colors visible in any 100×100px region.
- No pure white #FFFFFF backgrounds — use cream #FAF6F0.
- No pure black #000000 text — use charcoal #2D2A26.
- Never substitute the brand palette with similar-looking colors
  (no orange instead of terracotta, no teal instead of jade).

CULTURE:
- No Western-only visual signals when topic is Vietnam-specific
  (e.g., do not use $ when topic mentions VND — use đ or 'đồng').
- No imagery that misrepresents Vietnamese context (wrong attire,
  wrong architecture, wrong currency notes).

=== END NEGATIVE ===
```
