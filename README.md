
# Frontend:
- podize se sa npx nuxi dev

# Backend:
- podize se sa ./pb/pocketbase serve na localhost:8090/_/
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
----------------------------------
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