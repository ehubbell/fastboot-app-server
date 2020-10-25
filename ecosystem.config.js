module.exports = {
  apps : [{
    name: 'fastboot',
    script: 'npm',
    cwd: '/var/app/fastboot-app-server',
    args: 'start',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
  }],
};