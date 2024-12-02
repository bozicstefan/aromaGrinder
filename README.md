# Frontend:

- podize se sa npx nuxi dev

# Backend:

- podize se sa ./pb/pocketbase serve na localhost:8090/\_/
- m: info@aromagrinder.com p:Admin123$$
- moze da se radi import/export db backup
- moze da se radi export/import db schema

# Koraci za objavljivanje iz CLI:

- npx nuxi build
- git add .
- git commit -m 'poruka'
- git push
- PUSH okida automatski build na railway.app koji je podesen kao hosting okruzenje

# Setovanje hosting okruzenja:

- Setup je u /concept folderu sa slikama (dva .pdf dokumenta)

# lokalni .env:

- POCKETBASE_URL=http://localhost:8090

### Prompt za post template:

---

Make me a blog post on "TOPIC HERE" where:

- length is approx 1500 characters
- the template has following structure (DO NOT ADD STYLES OR ALTERNATE STRUCTURE!!!):

<section>
<p>intro paragraph</p>
<div class='toc'>
<h2>Table of contents:</h2>
<ul>
<li>
<a>Linked subheading elements</a>
</li>
</ul>
</div>
{{BlogPost without h1 title, with h2 subtitles and text}} 
<section>for related posts if any</section> 
</section>
----------------------------------

UI:

1. #fac826 (Bright Yellow)
   Role: Highlight
   Why: This color is vibrant, attention-grabbing, and naturally draws the eye.
   Use Case: Use it sparingly to emphasize key elements such as buttons, icons, or important notifications. For example, it could highlight hover states or active menu items.

2. #fffacb (Soft Cream)
   Role: Midtone
   Why: This is a light, neutral color that works well as a base or background tone. It’s easy on the eyes and doesn’t overpower other elements.
   Use Case: Use it for backgrounds, containers, or card surfaces where content is displayed, ensuring good contrast with text or darker accents.

3. #d0a465 (Muted Gold)
   Role: Shadow
   Why: This color is darker and warmer, making it ideal for adding depth and creating a sense of elevation.
   Use Case: Use it for drop shadows, borders, or subtle outlines around elevated elements like buttons or cards.

4. #236160 (Deep Teal)
   Role: Accent
   Why: This darker, rich color provides strong contrast and is ideal for drawing attention without being too flashy.
   Use Case: Use it for text, icons, or small elements that need emphasis, such as active states or links. It can also serve as a complementary tone to balance the brightness of #fac826.

| **Color**   | **Role**  | **Example Use**                                           |
| ----------- | --------- | --------------------------------------------------------- |
| **#fac826** | Highlight | Buttons, hover effects, or notification badges.           |
| **#fffacb** | Midtone   | Backgrounds, containers, or card surfaces.                |
| **#d0a465** | Shadow    | Drop shadows, borders, or 3D depth effects.               |
| **#236160** | Accent    | Text, icons, small emphasized elements, or active states. |
