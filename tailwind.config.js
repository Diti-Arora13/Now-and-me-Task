module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
        'ex-small': '12px',
        'sm': '14px',
        'md': '16px',
        'lg': '18px',
        'xl': '28px',
        '2xl': '40px',
    },
    extend: {
      colors: {
        'black-bg': '#131319',
        'post-black': '#191920',
        'gray': '#27292D',
        'blue': '#4A96FF',
        'light-placeholder-gray': '#7F8084',
        'dim-white': '#C5C7CA',
        'border-color': '#35373B'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      height: {
        'smaller-h': '390px',
        'bigger-h': '476px'
      }
    },
  },
  plugins: [],
}
