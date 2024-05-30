const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'story.screenspace.io', pathname: '/**' },
      { protocol: 'https', hostname: 'pbs.twimg.com', pathname: '/**' },
      { protocol: 'https', hostname: 'vashong.github.io', pathname: '/**' },
      { protocol: 'https', hostname: 'creditcards.chase.com', pathname: '/**' },
      { protocol: 'https', hostname: 'cdn.wallethub.com', pathname: '/**' },
      { protocol: 'https', hostname: 'images.ctfassets.net', pathname: '/**' },
      { protocol: 'https', hostname: 'uploads-ssl.webflow.com', pathname: '/**' },
      { protocol: 'https', hostname: 'paygeon.builtfirst.com', pathname: '/**' },
      {protocol: 'https', hostname: 's2.tokeninsight.com', pathname: '/**'},
    ],
  },
};

module.exports = nextConfig;
