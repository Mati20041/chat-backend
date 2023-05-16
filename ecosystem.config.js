module.exports = {
  apps: [
    {
      script: 'dist/main.js',
      watch: '.',
    },
  ],

  deploy: {
    production: {
      user: 'frog',
      host: 'frog01.mikr.us',
      port: '10213',
      ref: 'origin/main',
      repo: 'https://github.com/Mati20041/chat-backend.git',
      path: '/home/frog/apps/chat-backend',
      'pre-deploy-local': '',
      'post-deploy':
        'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
    },
  },
};
