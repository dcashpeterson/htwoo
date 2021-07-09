module.exports = {
    // workers: process.env.CI ? 2 : 6,
    use: {
        // Browser options
        headless: true,
        // slowMo: 50,

        // Context options
        viewport: {
            width: 1280,
            height: 720
        },
        ignoreHTTPSErrors: true,

        // Artifacts
        screenshot: 'only-on-failure',
        video: 'retry-with-video',
    },
    projects: [{
            name: 'Chromium',
            use: {
                // Configure the browser to use.
                browserName: 'chromium',
                // Any Chromium-specific options.
                viewport: {
                    width: 600,
                    height: 800
                },
            },
        },
        {
            name: 'Firefox',
            use: {
                browserName: 'firefox'
            },
        },
        {
            name: 'WebKit',
            use: {
                browserName: 'webkit'
            },
        },
    ]
};