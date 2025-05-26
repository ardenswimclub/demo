/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      typography: () => ({
        tight: {
          css: {
            'li > ul': {
              marginTop: '0em',
              marginBottom: '0.5em',
            },
            'ul > li': {              
              marginTop: '0em',
              marginBottom: '0.5em',
            },
            'ol > li': {
              marginTop: '0em',
              marginBottom: '0em',
            },
            'li > p': {
              marginTop: '0em',
              marginBottom: '0em',
            },
            h2: {
              marginTop: '1em',
              marginBottom: '1em'
            }
          },
        },
      }),
    },
  },
}
