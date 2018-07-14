module.exports = {
  apps : [{
    name: "fastboot",
    script: "./server.js",
    log_date_format: 'DD-MM-YYYY HH:mm Z',
    max_memory_restart: '500M',
    instances: 'max',
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}