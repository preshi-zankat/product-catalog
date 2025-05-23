# Product Catalog

A simple product catalog web application built with **React**, **Vite**, and **React Router**.  
It fetches products from [Fake Store API](https://fakestoreapi.com/) and displays them in a responsive grid.  
Clicking a product shows detailed information.

## Features

- Product listing with images, price, and category
- Product detail page with description and category
- Responsive design
- Loading and error handling

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run the development server:**
   ```sh
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Run ESLint

## Project Structure

```
src/
  components/
    Loader.jsx
    ProductCard.jsx
  pages/
    ProductList.jsx
    ProductDetail.jsx
  App.jsx
  main.jsx
  index.css
  App.css
```

## API

- [Fake Store API](https://fakestoreapi.com/)

---

Built with [Vite](https://vitejs.dev/) and [React](https://react.dev/).
