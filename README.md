# Free2Eat

A web application for finding allergy-friendly recipes that cater to specific dietary needs without compromising on taste.

**Live Demo:** [https://free2eat.netlify.app/](https://free2eat.netlify.app/)

## About

Free2Eat was developed as a Year 12 SACE Assessment Item Folio (AIF) project. The application helps users discover recipes that match their dietary restrictions, including options for dairy-free, gluten-free, nut-free, egg-free, sesame-free, and vegan diets.

## Features

- **Allergy Filtering**: Select multiple dietary restrictions to find suitable recipes
- **Recipe Search**: Search for recipes by name, description, or ingredients
- **Mobile-Friendly Design**: Responsive interface optimized for all device sizes
- **Recipe Details**: View ingredients, instructions, and images for each recipe
- **Persistent Preferences**: User dietary preferences are saved between sessions

## Technologies Used

- **Next.js**: React framework for server-rendered applications
- **TailwindCSS**: Utility-first CSS framework for styling
- **LocalStorage**: Browser storage for saving user preferences
- **Static Data**: JSON-based recipe database

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/free2eat.git
cd free2eat
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

This project is configured for deployment on Netlify:

```bash
npm run build
npm run export
```

The static export will be in the `out` directory, ready for deployment.

## Project Structure

- `pages/`: Application routes and pages
- `components/`: Reusable UI components
- `data/`: Recipe JSON data
- `public/`: Static assets like images
- `styles/`: Global CSS styles

## Screenshots

![Home Page](public/empty-state-icon.png)
*Home page with allergy filter options*

## License

This project was created for educational purposes as part of a SACE Assessment Item Folio.

## Acknowledgments

- Special thanks to all who contributed to the development and testing of this application
- Recipe images and data are for demonstration purposes only
