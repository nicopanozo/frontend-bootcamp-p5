# Click Counter Project

A simple web app that counts button clicks, built with SCSS, vanilla JS, and Gulp for build automation.

## Project Structure

Practica5/
├─ dist/ # Build output (ignored)
├─ src/
│ ├─ css/ # SCSS source
│ ├─ js/ # JS source
│ ├─ img/ # Images
│ └─ index.html # HTML template
├─ gulpfile.js # Gulp tasks
├─ legacy.js # Original legacy code
├─ legacy_refactored.js # Refactored code for Exercise 1
├─ package.json
└─ README.md

## Description

This project is a simple click counter application that demonstrates modern frontend development practices. It uses SCSS for styling, vanilla JavaScript for functionality, and Gulp for automating build tasks.

## Features

- Click counter that tracks the number of button clicks
- Responsive design with SCSS
- Automated build process with Gulp

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
2. Install dependencies: 
```bash
npm install
```

### Development

To start the development server with live reload: 
```bash
npm run serve
```


### Build

To build the project for production: 
```bash
npm run build
```


## Gulp Tasks

- `styles`: Compiles SCSS to CSS, adds vendor prefixes, and minifies
- `scripts`: Processes JavaScript files
- `images`: Optimizes images
- `html`: Injects CSS and JS into HTML
- `serve`: Starts development server with live reload
- `build`: Runs all build tasks in parallel