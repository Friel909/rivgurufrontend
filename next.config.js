const path = require('path')
const withPWA = require('next-pwa')

module.exports = withPWA({
    pwa: {
        // disable: process.env.NODE_ENV === 'development',
        // dest: 'public',
        register: true,
        sw: '/sw.js'
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    env: {
        JWT_SECRET: "djhfghbdsgrasklkajsdgf",
        SENDGRID_KEY: 'SG.4py49dSvRsuOA_y1LvKZWg.KCRikQIJDVT_.....Q',
        CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/rivguru-2021/image/upload",
        CLOUDINARY_VIDEO_URL: "https://api.cloudinary.com/v1_1/rivguru-2021/video/upload",
        STRIPE_SECRET_KEY: "sk_test_51J10t7AfIZQz3G2o5nKjBCb29RflclhloTDNlJ630ndQYgU35GsPpij7KuYbHUYFVFay9Q2fdj5kWt98su0pg8Ry00buUNJMrg",
        STRIPE_PUBLISHABLE_KEY: "pk_test_51J10t7AfIZQz3G2oGm3Y3KvuXffXoI7y0pnvmgnimUcORPdiLox7AMcUbiBzsODG22x1NrNFFMp5bPbgFqBBlbcD004dFz8tJn"
    }
})