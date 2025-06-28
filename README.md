# Background Remover App

![Banner](background_change_img/banner.png)

This is a simple interactive web app for comparing two images with a sliding overlay effect. Move your mouse over the image to reveal the original image beneath a transparent background.

## ✨ Features

- **Interactive slider:** Reveal more or less of the original image by moving your mouse.
- **Responsive design:** Works on desktop and mobile browsers.
- **Easy customization:** Swap in your own images for instant results.


## 🚀 Usage

1. **Clone or download this repository.**
2. Place your images in the `background_change_img/` folder, replacing `original.jpg` and `transparent.png` as needed.
3. Open `index.html` in your browser.


## ⚙️ Customization

- **Change images:** Replace `background_change_img/original.jpg` and `background_change_img/transparent.png` with your own images.
- **Adjust overlay:** Edit `.img-wrap { width: 50%; }` in `style.css` to set the initial overlay width.


## 📝 How it works

- The transparent image is displayed as the base.
- The original image is overlaid and its width is controlled by your mouse position.
- CSS handles the layout, and a small JavaScript snippet provides the interactive effect.


## 📷 Example

![Demo](background_change_img/original.jpg)

## 📄 License

This project is for educational and demonstration

