module.exports = {
  apps : [{
    name: "fastboot",
    script: "/var/app/fastboot-app-server/server.js",
    log_date_format: 'MM-DD-YYYY HH:mm Z',
    max_memory_restart: '100M',
    instances: 'max',
    merge_logs: true,
  }]
}