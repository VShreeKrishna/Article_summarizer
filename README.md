```markdown
# Article Summarizer

This project is a web application called Sumz, which simplifies lengthy articles into clear and concise summaries. It is built using React and Vite, with state management handled by Redux Toolkit.

## Overview

Sumz is an article summarizer that allows users to input a URL of an article and receive a summarized version of the content. The application features a clean and responsive design, making it easy to use on both desktop and mobile devices.

## Setup Instructions

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/vshreekrishna/article_summarizer.git
   cd article_summarizer
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build the project for production:**
   ```bash
   npm run build
   ```

5. **Preview the production build:**
   ```bash
   npm run preview
   ```

## Main Components

### `Hero`

The `Hero` component is a functional component that returns a header element with a navigation bar containing a logo and a button that opens a GitHub link in a new tab. The header also contains a title and a description for the Sumz application.

### `Demo`

The `Demo` component is a functional component that manages state variables for `article`, `allArticles`, and `copied`. It uses a custom hook named `useLazyGetSummaryQuery` to fetch article summaries. The component includes a form for inputting a URL and displays a list of articles with their URLs and summaries.

## Services

### `article.js`

This file exports an instance of an API created using the `createApi` function from the `@reduxjs/toolkit/query/react` package. The API is used to fetch article summaries from a third-party API. It includes a single endpoint `getSummary` that takes an article URL as a parameter and returns a summary of the article. The `useLazyGetSummaryQuery` hook is also exported for easy querying.

### `store.js`

This file exports a Redux store configured with middleware and a reducer for an API slice called "article". The store is created using the `configureStore` function from the "@reduxjs/toolkit" library. It includes the middleware and reducer for the "article" API slice.

## Scripts

- `dev`: Starts the development server using Vite.
- `build`: Builds the project for production using Vite.
- `lint`: Runs ESLint to check for code quality issues.
- `preview`: Previews the production build using Vite.

## Dependencies

- `@reduxjs/toolkit`: ^2.2.5
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `react-redux`: ^9.1.2

## Dev Dependencies

- `@types/react`: ^18.2.66
- `@types/react-dom`: ^18.2.22
- `@vitejs/plugin-react`: ^4.2.1
- `autoprefixer`: ^10.4.19
- `eslint`: ^8.57.0
- `eslint-plugin-react`: ^7.34.1
- `eslint-plugin-react-hooks`: ^4.6.0
- `eslint-plugin-react-refresh`: ^0.4.6
- `postcss`: ^8.4.38
- `tailwindcss`: ^3.4.4
- `vite`: ^5.2.0

