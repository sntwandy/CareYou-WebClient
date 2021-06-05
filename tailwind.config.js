module.exports = {
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend: {
      width: {
        'primaryButton': '12.5rem',
        'primaryInput': '16.875rem',
        'diagnosisResults': '15.875rem',
        'buttonMiddle': '7.313rem',
        'title': '16.875rem',
        'menuButton': '3.313rem',
        'menuIcon': '1.25rem',
        'menu': '12.131rem',
        'menuImg': '4.375rem',
      },
      backgroundImage: theme => ({
        'bg-mobile': "url('https://i.imgur.com/2tSOxVz.jpg')",
        'bg-mobile2': "url('https://i.imgur.com/SnyVNvS.png')",
        'bg-desktop': "url('https://i.imgur.com/849DIgq.png')",
        'bg-desktop2': "url('https://i.imgur.com/twnPT9G.jpg')",
        'bg-mobileColor2': "url('https://i.imgur.com/pdYeEZe.png')",
        'bg-desktopColor2': "url('https://i.imgur.com/AYUaEsY.png')",
      })
    },
    height: {
      primaryButton: '2.8125rem',
      primaryInput: '3.125rem',
      title: '2.625rem',
      sufferingDiv: '25rem',
      menuButton: '2.688rem',
      menu: '29.125rem',
      selectedSym: '8.625rem',
      diagnosisResults: '11.063rem',
      buttonDiagnosisResults: '2rem',
      diagnosisResultsPercent: '1.60rem',
      diagnosisResultsPercent2: '1.50rem',
      full: '100vh',
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#3E5F8A',
      'secondary': '#F4F4F4',
      'tertiary': '#E4E4E4',
    }),
    borderRadius: {
      'button': '0.625rem',
      'input': '1.25rem',
      'diagnosisResultsPercent': '1.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
    },
    borderColor: theme => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.300', 'currentColor'),
      'primary': '#3E5F8A',
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