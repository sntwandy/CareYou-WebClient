module.exports = {
  theme: {
    extend: {
      width: {
        'button': '12.5rem',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      }
    },
    height: {
      button: '2.8125rem',
      md: '16px',
      lg: '24px',
      xl: '48px',
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#00001e',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
    }),
    borderRadius: {
      'button': '0.625rem',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
    },
    borderColor: theme => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.300', 'currentColor'),
      'primary': '#00001e',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
    }),
    borderWidth: {
      DEFAULT: '1px',
        'button': '2px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
    },
  },
  purge: ['./pages/**/*.tsx', './styles/**/*.css'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};