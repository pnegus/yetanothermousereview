This is the source code for my mouse review site, yetanothermousereview. 

# A couple of notes for working with Jekyll and Tailwind:

- Do not forget to include `tailwind.css` in your HTML template/head.

- Do not forget to include `class="prose"` when working with markdown.

- Excerpt handling is not well fleshed out. If you want a cover image or something else on each blog post before the text content, I recommend defining it in the layout and not in the markdown, as there is no easy way to set the start position for excerpts.