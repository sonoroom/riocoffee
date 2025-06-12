import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        dividerWeight: "1px", 
        disabledOpacity: 0.45, 
        fontSize: {
          tiny: "0.75rem", 
          small: "0.875rem", 
          medium: "0.9375rem", 
          large: "1.125rem", 
        },
        lineHeight: {
          tiny: "1rem", 
          small: "1.25rem", 
          medium: "1.5rem", 
          large: "1.75rem", 
        },
        radius: {
          small: "6px", 
          medium: "8px", 
          large: "12px", 
        },
        borderWidth: {
          small: "1px", 
          medium: "1px", 
          large: "2px", 
        },
      },
      themes: {
        light: {
          colors: {
            background: {
              DEFAULT: "#F4F4F0" // Light cream background
            },
            content1: {
              DEFAULT: "#FFFFFF",
              foreground: "#2C2C2C"
            },
            content2: {
              DEFAULT: "#f7f7f3",
              foreground: "#2C2C2C"
            },
            divider: {
              DEFAULT: "rgba(44, 44, 44, 0.15)"
            },
            focus: {
              DEFAULT: "#000000" // Dark green
            },
            foreground: {
              DEFAULT: "#000000" // Dark gray text
            },
            primary: {
              50: "#edf4ee",
              100: "#d1e4d3",
              200: "#b3d3b9",
              300: "#8bb892",
              400: "#60996a",
              500: "#312107", // Main green color
              600: "#62420E", // Darker green
              700: "#312107",
              800: "#0e2311",
              900: "#071108",
              DEFAULT: "#62420E", // Dark green
              foreground: "#FFFFFF"
            },
            secondary: {
              50: "#f9f0e9",
              100: "#f0dace",
              200: "#e6c3b1",
              300: "#d9a384",
              400: "#c88058",
              500: "#96613f", // Coffee brown
              600: "#794f33",
              700: "#5c3c27",
              800: "#40291b",
              900: "#23170e",
              DEFAULT: "#96613f", // Coffee brown
              foreground: "#FFFFFF"
            }
          }
        }
      }
    })
  ]
}
