module.exports = {
  apps: [
    {
      name: 'App',
      exec_mode: 'cluster',
      instances: 1, // Or a number of instances
      script: './.nuxt/App.js',
      args: 'start',
      // rootDir: 'nuxt.config.js'
    }
  ]
}