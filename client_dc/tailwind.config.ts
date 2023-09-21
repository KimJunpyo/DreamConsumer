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
      fontFamily: {
        nl: ['NANUMSQUAREL'],
        nr: ['NANUMSQUARER'],
        nb: ['NANUMSQUAREB'],
        neb: ['NANUMSQUAREEB'],
      },
      keyframes: {
        'ease-down': {
          from: { transform: 'scaleY(0)' },
          to: { transform: 'scaleY(1)' },
        },
        'ease-up': {
          from: { transform: 'scaleY(1)' },
          to: { transform: 'scaleY(0)' },
        },
        'show-shadow': {
          from: { boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)' },
          to: { boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)' },
        },
      },
      animation: {
        'ease-down': 'ease-down 0.3s forwards',
        'ease-up': 'ease-up 0.3s forwards',
        'show-shadow': 'show-shadow 0.3s forwards',
      },
    },
  },
  plugins: [],
};
export default config;
