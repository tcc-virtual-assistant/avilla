/** @type {import('tailwindcss').Config} */
module.exports = {


  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: { 
      colors: {
        'verde-escuro' : '#147671',
        'azul' : '#007bc0',
        'verde-grama' : '#00884a',
        'roxo' : '#9e2896',
        'verde-agua' : '#18837e',
      },
     },

  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#570DF8",
          "testee": "#570DF8",

          "secondary": "#F000B8",

          "accent": "#37CDBE",

          "neutral": "#3D4451",

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },
}
