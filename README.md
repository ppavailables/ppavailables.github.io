# PP Availables - Affiliate Products Website

A clean, modern, and responsive single-page website for showcasing Amazon affiliate products.

## Features

- **Sticky Header**: Logo, tagline, and social media links always visible
- **Search Functionality**: Real-time search by product name or description
- **Product Grid**: E-commerce style card layout with hover effects
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Easy Product Management**: Simple JavaScript array for adding/removing products
- **Social Media Integration**: Links to Instagram, YouTube, and Pinterest

## File Structure

```
PPAVAILABLES/
│
├── index.html      # Main HTML file
├── styles.css      # CSS styles
├── script.js       # JavaScript for search functionality
├── products.js     # Product data (easy to edit)
└── README.md       # This file
```

## How to Add Products

Products are stored in `products.js` as a JavaScript array. Each product object has the following structure:

```javascript
{
    id: 1,                              // Unique identifier
    name: "Product Name",               // Name of the product
    description: "Product description", // Description (used in search)
    image: "path/to/image.jpg",         // Image URL or local path
    link: "https://amazon.com/..."      // Your Amazon affiliate link
}
```

### Steps to Add a New Product:

1. Open `products.js`
2. Copy an existing product object
3. Paste it into the `products` array
4. Update the fields with your product information
5. Save the file

### Example:

```javascript
{
    id: 13,
    name: "My New Product",
    description: "This is an amazing product that does wonderful things...",
    image: "images/my-product.jpg",
    link: "https://amazon.com/dp/YOUR-AFFILIATE-LINK"
}
```

## How to Update Social Media Links

Update the social media links in `index.html` (both in header and footer):

```html
<!-- Replace with your actual usernames/URLs -->
<a href="https://instagram.com/yourusername" ...>
<a href="https://youtube.com/yourusername" ...>
<a href="https://pinterest.com/yourusername" ...>
```

## How to Customize the Header

Edit the header section in `index.html`:

```html
<div class="logo-section">
    <h1 class="logo">PP Availables</h1>  <!-- Your site name -->
    <p class="tagline">
        Discover amazing products at great prices.<br>
        Your one-stop shop for quality finds!
    </p>  <!-- Your 2-line description -->
</div>
```

## Image Guidelines

- Recommended image size: 400x400 pixels (square) or similar aspect ratio
- Supported formats: JPG, PNG, WebP
- Images can be:
  - Local paths: `"images/product1.jpg"`
  - Web URLs: `"https://example.com/image.jpg"`
- If an image fails to load, a placeholder will be shown automatically

## Running the Website

Simply open `index.html` in a web browser. No server required!

For development with live reload, you can use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Customization Tips

### Change Colors
Edit the CSS variables in `styles.css`:
- Header gradient: `.header` background
- Accent color: Search button and links

### Change Layout
- Adjust `grid-template-columns` in `.product-grid` to change card sizes
- Modify `minmax(280px, 1fr)` to make cards wider or narrower

### Add More Social Platforms
1. Add Font Awesome icon class in `index.html`
2. Add corresponding CSS if needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

Free to use and modify for your affiliate marketing needs.