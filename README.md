# What is BTSTRP?

BTSTRP is the smallest UI framework out there...Literally the smallest. BTSTRP has all the same basic components components, but they're just tiny. It's great for creating thumbnails and storyboards for websites and applications. Best of all, it uses the same markup structure as Bootstrap.

## Getting started

Download or clone this repo. If your project uses Sass, you can import `btstrp.scss` into your project or just include `btstrp.css` in your site's `<head>`. If you're using vanilla CSS, just include `btstrp.css` in your site's `<head>`.

You can also install BTSTRP in your project with npm or Bower. Instructions.

## Using BTSTRP in your project
### The BTSTRP container

Wrap your BTSTRP thumbnails in the `.btstrp-container` element like so:

```
<div class="btstrp-container">
  <!-- thumnbail markup -->
</div>
```

If you'd like your container to have browser style, add `.btstrp-browser`.

```
<div class="btstrp-container btstrp-browser">
  <!-- thumbnail markup -->
</div>
```

### Bootstrap features and components in BTSTRP
Most Bootstrap features and components are available in BTSTRP. A few features are excluded because they're not necessary at BTSTRP's small scale. For example, there is only one button size, and no responsive elements.

Here's a list of **excluded** elements:
* **Grid system** Media queries
* **Code** Inline code, user input, blocks of code, variables, and sample output
* **Tables** Responsive tables
* **Forms** Control sizing
* **Buttons** Sizes and link button
* **Images** Responsive images
* **Helper classes** Screen reader content, and image replacement
* **Responsive utilities** Classes, print classes, and test cases
* **Glyphicons**
* **Button groups** Sizing and vertical variation
* **Button dropdowns** Sizing
* **Input groups** Sizing
* **Navbar** Responsive elements
* **Alerts** Dismissible alerts
* **Responsive embed**
* **Carousels**
