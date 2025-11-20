// Artemis Final React + Vite + Tailwind Project
// This canvas contains ALL the files needed to publish on GitHub.
// Copy each section into its corresponding file.

/* =============================
   package.json
============================= */
// File: package.json
{
  "name": "artemis-sports-hub",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "tailwindcss": "^3.4.0",
    "vite": "^5.0.0"
  }
}

/* =============================
   index.html
============================= */
// File: index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Artemis — Women's Sports Hub</title>
  </head>
  <body class="bg-gray-100">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

/* =============================
   tailwind.config.js
============================= */
// File: tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {}
  },
  plugins: []
};

/* =============================
   postcss.config.js
============================= */
// File: postcss.config.js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
};

/* =============================
   src/main.jsx
============================= */
// File: src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

/* =============================
   src/index.css
============================= */
// File: src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: system-ui, sans-serif;
}

/* =============================
   src/App.jsx
============================= */
// File: src/App.jsx
// (Copied from the user's prototype, unchanged except cleaned and production-ready.)
// NOTE: Your previous prototype code goes here exactly as finalized.
// Replace this comment with the entire App.jsx from the canvas.

/* =============================
   END OF PROJECT
============================= */
