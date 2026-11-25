# Growth App – SaaS Landing Page

A responsive, multi-section landing page for a fictional startup-growth SaaS product. Built with plain HTML, CSS and vanilla JavaScript, with no frameworks or build tools.

<!-- Add a screenshot after you push: -->
<!-- ![Desktop preview](screenshots/desktop.png) -->

**Live demo:** _add your GitHub Pages link here_

## Features

- **Responsive layout:** adapts to desktop, tablet and phone screens (breakpoints at 960px, 670px and 500px)
- **Mobile slide-in menu:** opens with a hamburger button and closes on link tap, outside tap, or the button again
- **FAQ accordion:** one answer open at a time, with keyboard support (Enter / Space)
- **FAQ tabs:** filter questions by All, Getting Started or Pricing
- **Pricing section:** Free and Premium plan cards
- **Testimonials, video preview and newsletter sign-up sections**
- **Accessibility basics:** alt text, ARIA labels on the menu button, labelled email input

## Sections

1. Navigation bar
2. Hero
3. Video / "how it works"
4. Testimonials
5. Pricing
6. FAQ
7. Footer with newsletter form

## Tech Stack

- HTML5
- CSS3 (custom properties, Flexbox, Grid, media queries)
- Vanilla JavaScript (ES6)
- [Poppins](https://fonts.google.com/specimen/Poppins) font via Google Fonts
- [Font Awesome](https://fontawesome.com/) icons via CDN

## Project Structure

```
Saas landing page/
├── images/          # Logo, favicon, hero and preview images
├── index.html       # Page markup
├── style.css        # Styles and responsive rules
├── main.js          # FAQ accordion, FAQ tabs, mobile menu
└── README.md
```

## Getting Started

No installation needed.

1. Clone the repository
   ```bash
   git clone https://github.com/mohammadbdms-sketch/<your-repo-name>.git
   ```
2. Open the folder
   ```bash
   cd <your-repo-name>
   ```
3. Open `index.html` in your browser (or use a tool like VS Code's Live Server).

An internet connection is needed to load Google Fonts and Font Awesome icons.

## Customizing

- **Colors:** change the variables at the top of `style.css` (`--primary-color`, `--light-color`, `--dark-color`).
- **Content:** edit the text, pricing and FAQ entries directly in `index.html`.
- **Images:** replace the files in `images/` and keep the same file names.

## Author

GitHub: [@mohammadbdms-sketch](https://github.com/mohammadbdms-sketch)

## License

This project is open source and available under the [MIT License](LICENSE).

