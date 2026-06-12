# Yu Wei Academic Website

A minimal bilingual academic website for GitHub Pages.

## Structure

```text
index.html              # Home + academic timeline
research.html           # Research themes and selected projects
publications.html       # Publications, thesis, patent, manuscripts
talks.html             # Talks, posters, and project presentations
awards.html             # Awards and honors
cv.html                 # CV summary page
assets/css/style.css    # Site styles
assets/js/language.js   # English/Chinese language toggle
assets/files/           # Place CV PDF, posters, and slides here
```

## How to publish on GitHub Pages

1. Create a GitHub repository named `YOUR-USERNAME.github.io`.
2. Upload all files in this folder to the repository.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose the `main` branch and the root folder `/`.
6. Your website will be available at `https://YOUR-USERNAME.github.io`.

## How to add a downloadable CV

1. Put your PDF at `assets/files/YuWei_CV.pdf`.
2. Open `cv.html`.
3. Find the commented section near the top and uncomment the download button.

## How to edit bilingual content

Each bilingual block uses:

```html
<span data-lang="en">English text</span>
<span data-lang="zh">中文文本</span>
```

The language toggle is handled by `assets/js/language.js`.

## Notes before public release

- Re-check all publication titles, author order, conference formats, and URLs.
- Keep manuscripts clearly marked as `in preparation`, `under review`, `accepted`, or `published`.
- Avoid sharing private or non-public information.

## Updating images

This version includes media slots for research themes, featured publications, and selected talks/posters. Placeholder SVGs are stored in:

```text
assets/img/
```

To replace a placeholder with your own figure or photo:

1. Put your image in `assets/img/`, for example `esa-2024-photo.jpg` or `neon-biodiversity-figure.png`.
2. Open the relevant HTML file.
3. Replace the `src` path, for example:

```html
<img class="theme-media" src="assets/img/neon-biodiversity-figure.png" alt="NEON biodiversity figure">
```

Recommended image sizes:

- Home research theme cards: 1600 × 900 px or any 16:9 ratio.
- Talks/posters media slots: 1200 × 800 px works well.
- Featured publication image: 1400 × 900 px works well.

When using published paper figures, check the journal license or use your own version of the figure.



## v3 update: navy theme and Photos page

This version uses a deep navy + white academic color palette. The navigation now includes a `Photos` page after `CV`.

### Replacing photos

Put your real photos in `assets/img/` and update the image paths in `photos.html`. Recommended sizes:

- Photos page: 4:3 or 3:2 crop, at least 1200 px wide.
- Research theme images: 16:9 crop, at least 1400 px wide.
- Talk/poster images: 3:2 or 16:9 crop, at least 1200 px wide.

Suggested filenames:

```text
assets/img/photo-field-trip.jpg
assets/img/photo-graduation.jpg
assets/img/photo-conference.jpg
assets/img/photo-lab.jpg
assets/img/photo-campus.jpg
assets/img/photo-award.jpg
```

For group photos, confirm that everyone shown is comfortable with public display before publishing.
