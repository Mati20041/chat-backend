module.exports = {
  apps: [
    {
      name: 'chat-backend',
      script: 'dist/main.js',
      watch: '.',
      env: {
        APP_PORT: 20213,
      },
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
