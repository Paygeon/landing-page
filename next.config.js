const nextConfig = {
  output: 'export',
  basePath: '/landing-page', // Replace 'repository-name' with your GitHub repository name
  assetPrefix: '/landing-page/', // Replace 'repository-name' with your GitHub repository name
  images: {
    domains: ['pbs.twimg.com','vashong.github.io', 'creditcards.chase.com', 'cdn.wallethub.com', 'images.ctfassets.net', 'uploads-ssl.webflow.com'],
  },
};

module.exports = nextConfig;