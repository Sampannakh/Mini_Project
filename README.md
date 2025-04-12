# pearTour Website

A modern travel website showcasing various destinations with interactive features.

## Features

- Multiple destinations with detailed information
- User details collection
- Interactive destination cards
- Detailed information for each destination
- Distance calculation from source
- Future visits list
- Responsive design

## Project Structure

```
pearTour/
├── index.html
├── styles.css
├── images/
│   └── destinations/
│       ├── paris.jpg
│       ├── bali.jpg
│       ├── newyork.jpg
│       ├── tokyo.jpg
│       ├── dubai.jpg
│       ├── sydney.jpg
│       ├── delhi.jpg
│       ├── goa.jpg
│       └── jaipur.jpg
└── js/
    ├── main.js
    ├── data/
    │   └── destinations.js
    ├── utils/
    │   ├── calculations.js
    │   └── storage.js
    └── components/
        ├── destinationCard.js
        └── tabContent.js
```

## Image Requirements

To add your own images to the website:

1. Place your destination images in the `images/destinations/` directory
2. Name your images according to the destination keys:

   - `paris.jpg`
   - `bali.jpg`
   - `newyork.jpg` (Note: Use lowercase 'newyork' for the filename)
   - `tokyo.jpg`
   - `dubai.jpg`
   - `sydney.jpg`
   - `delhi.jpg`
   - `goa.jpg`
   - `jaipur.jpg`

3. Image specifications:
   - Format: JPG or PNG
   - Size: Recommended 800x600 pixels or larger
   - Aspect ratio: 4:3 or 16:9
   - File size: Optimize for web (under 500KB per image)

Note: If an image is not found in the local directory, the website will automatically fall back to using an Unsplash placeholder image.

## How to Run

1. Using any HTTP server:

   - Node.js: `npx http-server`
   - PHP: `php -S localhost:8000`
   - Python: `python -m http.server 8000`

2. Direct file opening:
   - Simply open `index.html` in your browser
   - Note: Some features might not work due to browser security restrictions

## Technologies Used

- HTML5
- CSS3
- JavaScript
- FontAwesome
- Unsplash (for fallback images)

## Browser Compatibility

The website works on all modern browsers:

- Chrome
- Firefox
- Safari
- Edge

## Future Improvements

- Add more destinations
- Implement a booking system
- Create user accounts
- Add real images and reviews
- Implement a search feature
- Add more interactive elements
