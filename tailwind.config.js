module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      keyframes: {
        upDown: {
          'from': { transform: 'translateY(-10%)' },
          'to': { transform: 'translateY(10%)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
        'up-down': 'upDown 3s ease-in-out infinite alternate',
        'wiggle': 'wiggle 4s ease-in-out infinite',
      }
    },
  },
  variants: {},
  plugins: [],
}
