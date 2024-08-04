# Movie Box App

This is a simple Movie box app built with React, TypeScript, React Query, and Tailwind CSS. It fetches movie and series data, provides search and sorting functionality, and includes pagination.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Components](#components)
- [Hooks](#hooks)
- [Utils](#utils)
- [Styles](#styles)

## Installation

### Prerequisites

- Node.js (>= 20.x)
- Yarn or npm

### Steps

1. Clone the repository:
    sh
    git clone https://github.com/Estermani/movie-box.git
    cd movie-box
    

2. Install dependencies:
    sh
    yarn install
    # or
    npm install
    

3. Start the development server:
    sh
    yarn dev
    # or
    npm start
    

The app will be available at [http://localhost:3000](http://localhost:3000).

## Usage

### Home Page

- Displays both movies and series card.

### Movies Page

- Displays a list of movies.
- Includes search and sorting functionality.
- Pagination is provided to navigate through the list.

### Series Page

- Displays a list of series.
- Includes search and sorting functionality.
- Pagination is provided to navigate through the list.

## Features

- Fetching data using React Query
- Filtering and sorting of data
- Pagination
- Responsive design using Tailwind CSS
- TypeScript for type safety

## Components

### src/components/SearchBar.tsx

A search bar component to filter movies and series by title.

### src/components/Dropdown.tsx

A dropdown component to sort movies and series by title or release year.

### src/components/MovieList.tsx

A component to display a list of movies and series in a grid layout.

### src/components/MovieCard.tsx

A component to display individual movie or series details in a card format.

### src/components/Header.tsx

A header component with navigation links.

## Hooks

### src/hooks/useFetchMovies.ts

A custom hook to fetch movies and series data using React Query.

## Utils

### src/utils/filterAndSortData.ts

A utility function to filter and sort movie and series data based on search term and sort key.

## Styles

### Tailwind CSS

The project uses Tailwind CSS for styling. Configuration is done in tailwind.config.js.

### Global Styles

Custom styles can be added in src/index.css.
