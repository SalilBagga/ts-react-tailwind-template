const primary = 'hsla(208, 100%, 43%, 1)';
const secondary = 'hsla(190, 81%, 42%, 1)';

module.exports = {
  content: ['./src/**/*.{html,js,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: primary,
          50: 'hsla(208, 100%, 91%, 1)',
          100: 'hsla(208, 100%, 83%, 1)',
          200: 'hsla(208, 100%, 75%, 1)',
          300: 'hsla(208, 100%, 67%, 1)',
          400: 'hsla(208, 100%, 59%, 1)',
          500: 'hsla(208, 100%, 51%, 1)',
          600: primary,
          700: 'hsla(208, 100%, 35%, 1)',
          800: 'hsla(208, 100%, 27%, 1)',
          900: 'hsla(208, 100%, 19%, 1)',
        },
        secondary: {
          DEFAULT: secondary,
          50: 'hsla(190, 81%, 90%, 1)',
          100: 'hsla(190, 81%, 82%, 1)',
          200: 'hsla(190, 81%, 74%, 1)',
          300: 'hsla(190, 81%, 66%, 1)',
          400: 'hsla(190, 81%, 58%, 1)',
          500: 'hsla(190, 81%, 50%, 1)',
          600: secondary,
          700: 'hsla(190, 81%, 34%, 1)',
          800: 'hsla(190, 81%, 28%, 1)',
          900: 'hsla(190, 81%, 20%, 1)',
        },
        'gray-darker': '#504747',
        'ex-blue': '#130B43',
        'ex-rowhover': '#F4F7FD',
        'ex-trackhover': '#F0F3F9',
        notification: '#D85050',
        searchtext: '#5C5589',
        badge: '#130B43',
      },
      spacing: {
        7.5: '1.875rem', // 30px
        15: '3.75rem', // 60px
        22: '5.5rem', // 88px
        25: '6.25rem', // 100px
        26: '6.5rem', // 104px
        30: '8.5rem', // 136px
        32: '9rem', // 144px
        68: '17rem', // 272px
      },
      padding: {
        px: '1px',
      },
      margin: {
        px: '1px',
        '-px': '-1px',
        '-2px': '-2px',
        auto: 'auto',
      },
      fontSize: {
        micro: '.5rem', // 8px
        xxs: '.625rem', // 10px
        md: '1.125rem', // 18px
      },
      fontWeight: {
        hairline: 100,
      },
      fontFamily: {
        brand: ['Source Sans Pro', 'sans-serif'],
        sans: ['Source Sans Pro', 'sans-serif'],
        serif: ['Source Sans Pro', 'sans-serif'],
        inconsolata: ['Inconsolata'],
        source: ['source-code-pro', 'Menlo', 'Monaco', 'Consolas', 'Courier New', 'monospace'],
        exercism: ['Poppins', 'sans-serif'],
      },
      minWidth: {
        site: '18.75rem',
        'input-mini': '17.5rem',
        'input-small': '31.25rem',
        'input-medium': '36.3125rem',
        'input-large': '61.45rem',
        'button-mini': '5.5rem',
        'button-small': '7rem',
        'button-medium': '9.875rem',
        'button-large': '10rem',
      },
      width: {
        arrow: '.8rem',
        '3/10': '30%',
        '7/10': '70%',
        '9/10': '90%',
        '12/25': '48%',
        searchbar: '26rem',
      },
      maxWidth: {
        sm: '30rem',
        md: '40rem',
        lg: '50rem',
        xl: '60rem',
        '2xl': '70rem',
        '3xl': '80rem',
        '4xl': '90rem',
        '5xl': '100rem',
        '1/4': '25%',
        '1/2': '50%',
        '3/5': '60%',
        '4/5': '80%',
        '9/10': '90%',

        'site-mini': '17.5rem',
        'site-small': '31.25rem',
        'site-medium': '43.75rem',
        'site-large': '56.25rem',
        'drop-downw': '23.5rem',
        site: '73.75rem',
        screen: '100vw',
      },
      height: {
        arrow: '.4rem',
        px: '1px',
        4: '1rem',
        5: '1.25rem',
        8: '1.8rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        16: '4rem',
        25: '5rem',
        24: '6rem',
        32: '8rem',
      },
      borderWidth: {
        1: '1px',
        5: '5px',
      },
      borderRadius: {
        half: '50%',
        full: '100%',
      },
      zIndex: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
      },
      fill: {
        transparent: 'transparent',
      },
      flex: {
        2: '2 2 0%',
        3: '3 3 0%',
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': ['0 35px 35px rgba(0, 0, 0, 0.25)', '0 45px 65px rgba(0, 0, 0, 0.15)'],
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};
