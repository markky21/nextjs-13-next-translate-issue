module.exports = {
  locales: ['en'],
  defaultLocale: 'en',
  pages: {
    '*': ['common'],
  },
  loadLocaleFrom: (lang, ns) =>
    import(`./locales/${lang}/${ns}.json`).then((m) => m.default),
};
