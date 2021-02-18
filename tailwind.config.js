module.exports = {
  theme: {
    extend: {
      width: {
        'primaryButton': '12.5rem',
        'primaryInput': '16.875rem',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      }
    },
    height: {
      primaryButton: '2.8125rem',
      primaryInput: '3.125rem',
      lg: '24px',
      xl: '48px',
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#00001e',
      'secondary': '#F4F4F4',
      'tertiary': '#E4E4E4',
    }),
    borderRadius: {
      'button': '0.625rem',
      'input': '1.25rem',
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
    textColor: theme => theme('colors'),
      textColor: {
        'primary': '#000000',
        'secondary': '#F4F4F4',
        'primaryButtonHover': '#BABABA',
        'secondaryButtonHover': '#343434',
    },
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