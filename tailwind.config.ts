import type { Config } from "tailwindcss"

const config = {
  darkMode: "class",
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#F9FAFB", // Light grey from the designs
        foreground: "#111827",
        primary: {
          DEFAULT: "#0B1320", // The deep navy
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#D4A24C", // The luxury gold
          foreground: "#0B1320",
        },
        accent: {
          DEFAULT: "#F59E0B",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F3F4F6",
          foreground: "#6B7280",
        },
        success: {
          DEFAULT: "#16A34A", // For the green veg icons and delivered status
        },
        danger: {
          DEFAULT: "#DC2626", // For non-veg icons
        }
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'premium': '0 10px 40px -10px rgba(11, 19, 32, 0.08)',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config