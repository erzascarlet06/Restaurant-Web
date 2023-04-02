
const nextConfig = {
  reactStrictMode: true,
  //Added localization 
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'en',
  },
  //Added domain for scarper
  images:{
    domains:["www.dominos.jp"]
  }
};

module.exports = nextConfig;