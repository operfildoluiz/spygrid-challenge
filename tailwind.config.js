/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        major: ["Major Mono Display", "monospace"],
        anonymous: ["Anonymous Pro", "monospace"],
      },
    },
  },
  mode: "jit",
};
