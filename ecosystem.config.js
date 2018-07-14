module.exports = {
  apps : [{
    name: "fastboot",
    script: "/var/app/current/fastboot-app-server/server.js",
    log_date_format: 'MM-DD-YYYY HH:mm Z',
    max_memory_restart: '500M',
    instances: 'max',
    merge_logs: true,
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}