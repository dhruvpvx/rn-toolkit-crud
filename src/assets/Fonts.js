const Fonts = {
  regular: (s = 12) => ({
    fontWeight: '400',
    fontSize: s,
  }),
  medium: (s = 12) => ({
    fontWeight: '500',
    fontSize: s,
  }),
  semiBold: (s = 12) => ({
    fontWeight: '600',
    fontSize: s,
  }),
  bold: (s = 12) => ({
    fontWeight: '700',
    fontSize: s,
  }),
  black: (s = 12) => ({
    fontWeight: '900',
    fontSize: s,
  }),
};

export default Fonts;
