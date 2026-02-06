/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  plugins: [
    require("tailwind-corner-smoothing"),
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    // any custom plugin utilities here
  ],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "../server/scripts/**/*.{js,jsx}",
  ],
  safelist: ["border-Primary-500"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // 1. FONTS
      fontFamily: {
        sans: ["Plus Jakarta Sans", "serif"],
        heading: ['"Archivo Black"', "sans-serif"],
      },

      fontSize: {
        h1: ["54px", "1.111111"],
        h2: ["42px", "1.142857"],
        h3: ["32px", "1.125"],
        h4: ["24px", "1.166667"],
        h5: ["20px", "1.2"],
        "body-xl": ["24px", "1.25"],
        "body-l": ["18px", "1.555556"],
        "body-md": ["16px", "1.5"],
        "body-sm": ["14px", "1.428571"],
        "body-xsm": ["12px", "1.5"],
      },

      // 2. COLORS
      colors: {
        // --- A. SHADCN SYSTEM COLORS (REQUIRED) ---
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        // --- B. YOUR FIGMA BRAND COLORS ---
        Primary: {
          50: "#d9e3f7",
          100: "#b2c8f2",
          200: "#8bacef",
          300: "#6290ed",
          400: "#3a74ea",
          500: "#185ae0",
          600: "#164cb7",
          700: "#153d8d",
          800: "#142e63",
          900: "#111f3b",
        },
        Secondary: {
          50: "#f8ead8",
          100: "#f5d7b0",
          200: "#f3c487",
          300: "#f2b15c",
          400: "#f19f33",
          500: "#e88b11",
          600: "#bd7210",
          700: "#915a11",
          800: "#664111",
          900: "#3c2910",
        },
        Tertiary: {
          50: "#E3EDE7",
          100: "#C7DED0",
          200: "#ABCEB8",
          300: "#8FBFA1",
          400: "#73B18A",
          500: "#599F73",
          600: "#4B8360",
          700: "#3C664C",
          800: "#2E4938",
          900: "#1F2D24",
        },
        Grayscale: {
          50: "#fcfcfc",
          100: "#e8e8e8",
          200: "#d1d1d1",
          300: "#bbbbbb",
          400: "#a4a4a4",
          500: "#8e8e8e",
          600: "#787878",
          700: "#616161",
          800: "#4b4b4b",
          900: "#343434",
          950: "#1e1e1e",
        },
        Success: {
          50: "#66ff3b",
          100: "#37fe00",
          200: "#2ed700",
          300: "#29bf00",
          400: "#1e8a00",
        },
        Warning: {
          50: "#ffef68",
          100: "#ffea31",
          200: "#ffe710",
          300: "#e3cf0e",
        },
        Error: {
          50: "#ff3b3b",
          100: "#de0909",
          200: "#bc0404",
          300: "#980000",
          400: "#680000",
        },
      },

      // 3. GRADIENT BACKGROUNDS (Fixed syntax)
      backgroundImage: {
        "w-lb": "linear-gradient(135deg, #fefefe 0%, #b2c8f2 100%)",
        "b-lb": "linear-gradient(135deg, #1557DC 13.41%, #98B9FD 100%)",
        "db-b": "linear-gradient(135deg, #1445A6 0%, #6696F8 100%)",
        "o-do": "linear-gradient(133deg, #E88B11 0%, #F3C487 100%)",
        "lo-o": "linear-gradient(133deg, #F8EAD8 0%, #F2B15C 100%)",
        "dg-g": "linear-gradient(133deg, #2E4938 0%, #73B18A 100%)",
        "lg-g": "linear-gradient(133deg, #E3EDE7 0%, #73B18A 100%)",
        "p-lp": "linear-gradient(241deg, #EA395B 0%, #EF8A9D 100%)",
        "w-lb-180": "linear-gradient(180deg, #fefefe 70%, #b2c8f2 100%)",
      },

      // 4. SHADOWS
      boxShadow: {
        "btn-default":
          "0px 1px 2px 0px rgba(0,0,0,0.04), 0px 3px 3px 0px rgba(0,0,0,0.04), 0px 7px 4px 0px rgba(0,0,0,0.02)",
        "btn-hover":
          "0px 1px 3px 0px rgba(0,0,0,0.1), 0px 5px 5px 0px rgba(0,0,0,0.09), 0px 12px 7px 0px rgba(0,0,0,0.05)",
        "blue-glow":
          "0px 0px 2px 0px rgba(21,87,220,0.2), 1px 1px 3px 0px rgba(21,87,220,0.2), 2px 3px 4px 0px rgba(21,87,220,0.15)",
        "blue-60":
          "0px 0px 2px 0px rgba(21,87,220,0.2), 1px 1px 3px 0px rgba(21,87,220,0.2), 2px 3px 4px 0px rgba(21,87,220,0.15), 3px 5px 4px 0px rgba(21,87,220,0.04), 4px 7px 5px 0px rgba(21,87,220,0.01)",
        "deep-blue-60":
          "0px 0px 2px 0px rgba(20,46,99,0.2), 1px 1px 3px 0px rgba(20,46,99,0.2), 2px 3px 4px 0px rgba(20,46,99,0.15), 3px 5px 4px 0px rgba(20,46,99,0.04), 4px 7px 5px 0px rgba(20,46,99,0.01)",
        "success-60":
          "0px 0px 2px 0px rgba(93,255,49,0.2), 1px 1px 3px 0px rgba(93,255,49,0.2), 2px 3px 4px 0px rgba(93,255,49,0.15), 3px 5px 4px 0px rgba(93,255,49,0.04), 4px 7px 5px 0px rgba(93,255,49,0.01)",
        "warning-60":
          "0px 0px 2px 0px rgba(255,231,16,0.2), 1px 1px 3px 0px rgba(255,231,16,0.2), 2px 3px 4px 0px rgba(255,231,16,0.15), 3px 5px 4px 0px rgba(255,231,16,0.04), 4px 7px 5px 0px rgba(255,231,16,0.01)",
        "error-60":
          "0px 0px 2px 0px rgba(222,9,9,0.2), 1px 1px 3px 0px rgba(222,9,9,0.2), 2px 3px 4px 0px rgba(222,9,9,0.15), 3px 5px 4px 0px rgba(222,9,9,0.04), 4px 7px 5px 0px rgba(222,9,9,0.01)",
        "orange-60":
          "0px 0px 1.8421052694320679px 0px rgba(241,159,51,0.2), 0.9210526347160339px 0.9210526347160339px 2.763157844543457px 0px rgba(241,159,51,0.2), 1.8421052694320679px 2.763157844543457px 3.6842105388641357px 0px rgba(241,159,51,0.15), 2.763157844543457px 4.6052632331848145px 3.6842105388641357px 0px rgba(241,159,51,0.04), 3.6842105388641357px 6.447368621826172px 4.6052632331848145px 0px rgba(241,159,51,0.01)",
        "green-60":
          "0px 0px 1.8421052694320679px 0px rgba(46,73,56,0.2), 0.9210526347160339px 0.9210526347160339px 2.763157844543457px 0px rgba(46,73,56,0.2), 1.8421052694320679px 2.763157844543457px 3.6842105388641357px 0px rgba(46,73,56,0.15), 2.763157844543457px 4.6052632331848145px 3.6842105388641357px 0px rgba(46,73,56,0.04), 3.6842105388641357px 6.447368621826172px 4.6052632331848145px 0px rgba(46,73,56,0.01)",
      },

      dropShadow: {
        "btn-default": [
          "0 1px 2px rgba(0,0,0,0.04)",
          "0 3px 3px rgba(0,0,0,0.04)",
          "0 7px 4px rgba(0,0,0,0.02)",
          "0 12px 5px rgba(0,0,0,0.01)",
        ],
        "btn-hover": [
          "0 4px 8px rgba(0,0,0,0.08)",
          "0 5px 5px rgba(0,0,0,0.09)",
          "0 12px 7px rgba(0,0,0,0.05)",
          "0 22px 5px rgba(0,0,0,0.01)",
        ],
        "blue-60": [
          "0px 0px 2px rgba(21,87,220,0.2)",
          "1px 1px 3px rgba(21,87,220,0.2)",
          "2px 3px 4px rgba(21,87,220,0.15)",
          "3px 5px 4px rgba(21,87,220,0.04)",
        ],
        "deep-blue-60": [
          "0px 0px 2px rgba(20,46,99,0.15)",
          "1px 1px 3px rgba(20,46,99,0.2)",
          "2px 3px 4px rgba(20,46,99,0.2)",
          "3px 5px 4px rgba(20,46,99,0.04)",
          "4px 7px 5px rgba(20,46,99,0.01)",
        ],
        "success-60": "0 0 8px rgba(93,255,49,0.25)",
        "error-60": "0 0 8px rgba(222,9,9,0.25)",
      },

      // 5. BORDER RADIUS
      borderRadius: {
        xl: "3rem",
        lg: "2rem",
        md: "calc(1rem + 8px)",
        sm: "1rem",
        xsm: "calc(.5rem + 4px)",
      },
      keyframes: {
        "loading-bar": {
          "0%": { transform: "translateX(-150%)" },
          "100%": { transform: "translateX(150%)" },
        },
      },
      animation: {
        "loading-bar": "loading-bar 1.5s infinite ease-in-out",
      },
    },
  },
};
