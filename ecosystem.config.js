module.exports = {
    apps: [{
            name: 'app',
            script: './app.js',

            // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
            instances: 1,
            autorestart: true,
            watch: false,
            max_memory_restart: '1G',
            env: {
                NODE_ENV: 'development'
            },
            env_production: {
                NODE_ENV: 'production'
            }
        },
        {
            name: 'notes-service',
            script: './notes-service/notes-service.js',
            instances: 1,
            exec_mode: 'fork',
            autorestart: true,
            watch: false,
            max_memory_restart: '1G'
                // env: {
                //     NODE_ENV: 'development'
                // },
                // env_production: {
                //     NODE_ENV: 'production'
                // }
        },
        {
            name: 'info-service',
            script: './info-service/service-info.js',
            instances: 1,
            exec_mode: 'fork',
            autorestart: true,
            watch: false,
            max_memory_restart: '1G'
                // env: {
                //     NODE_ENV: 'development'
                // },
                // env_production: {
                //     NODE_ENV: 'production'
                // }
        }
    ],

    deploy: {
        production: {
            user: 'node',
            host: '212.83.163.1',
            ref: 'origin/master',
            repo: 'git@github.com:repo.git',
            path: '/var/www/production',
            'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
        }
    }
};