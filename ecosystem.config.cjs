module.exports = {
    apps: [{
        name: 'badge-expouse',
        script: './.output/server/index.mjs',
        cwd: '/home/expouse/public_html/badge.expouse.com',
        env: {
            NODE_ENV: 'production',
            PORT: 3002 // Ensure this port is open or use another one
        }
    }]
}