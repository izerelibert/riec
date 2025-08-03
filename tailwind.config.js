module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        background: 'var(--color-background)',
        text: 'var(--color-text)',
        border: 'var(--color-border)',
        hover: 'var(--color-hover)',
        active: 'var(--color-active)',
        error: 'var(--color-error)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        info: 'var(--color-info)',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        roboto: ['var(--font-roboto)'],
      },
      fontSize: {
        '6xl': 'var(--text-6xl)',
        '5xl': 'var(--text-5xl)',
        '4xl': 'var(--text-4xl)',
        '3xl': 'var(--text-3xl)',
        '2xl': 'var(--text-2xl)',
        'xl': 'var(--text-xl)',
        'lg': 'var(--text-lg)',
        'base': 'var(--text-base)',
        'sm': 'var(--text-sm)',
        'xs': 'var(--text-xs)',
      },
      borderRadius: {
        DEFAULT: 'var(--border-radius)',
      },
      boxShadow: {
        base: 'var(--shadow-base)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        inner: 'var(--shadow-inner)',
        outline: 'var(--shadow-outline)',
        none: 'var(--shadow-none)',
      },
      transitionDuration: {
        DEFAULT: 'var(--transition-duration)',
      },
      transitionTimingFunction: {
        DEFAULT: 'var(--transition-timing)',
      },
      lineHeight: {
        base: 'var(--line-height-base)',
      },
      fontWeight: {
        normal: 'var(--font-weight-normal)',
        medium: 'var(--font-weight-medium)',
        semibold: 'var(--font-weight-semibold)',
        bold: 'var(--font-weight-bold)',
        extrabold: 'var(--font-weight-extrabold)',
        black: 'var(--font-weight-black)',
      },
    },
  },
};
