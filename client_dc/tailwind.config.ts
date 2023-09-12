import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        red: {
          text: 'var(--textRed)',
          primary: 'var(--primaryRed)',
          valid: 'var(--validRed)',
        },
        orange: 'var(--orange)',
        blue: {
          primary: 'var(--primaryBlue)',
          secondary: 'var(--secondaryBlue)',
          nav: 'var(--navBlue)',
          light: 'var(--lightBlue)',
        },
        grey: {
          text: 'var(--textGrey)',
          border: 'var(--borderGrey)',
          cancel: 'var(--cancelGrey)',
        },
        tag: {
          red: 'var(--tagRed)',
          green: 'var(--tagGreen)',
          purple: 'var(--tagPurple)',
        },
        mint: 'var(--mint)',
      },
    },
  },
  plugins: [],
};
export default config;
