require(`dotenv`).config({
    path: `.env`,
});

module.exports = {
    pathPrefix: `/`,
    siteMetadata: {
        author: `Amar Prakash Pandey`,
        siteUrl: `https://www.amarpandey.me/`,
        siteHeadline: `Personal website of Amar Prakash Pandey.`,
        titleTemplate: `%s — Amar Prakash Pandey`,
        siteImage: `/meta-image-default.png`,
        siteTitle: `Amar Prakash Pandey`,
        siteTitleAlt: `Amar Prakash Pandey`,
        siteDescription: `Personal website of Amar Prakash Pandey. Currently working as a Solutions Consultant at Sahaj Software. I have also worked for Tata Research Design and Development Center, Tata Consultancy Service, and Google Summer of Code. Open Source Community Member at DuckDuckGo. Maintainer at Open Source Help Community.`,
        siteLanguage: `en`,
    },
    plugins: [
        {
            resolve: `@lekoarts/gatsby-theme-minimal-blog`,
            options: {
                navigation: [
                    {
                        title: `Blog`,
                        slug: `/blog`,
                    },
                    {
                        title: `About`,
                        slug: `/about`,
                    },
                    {
                        title: `Project`,
                        slug: `/projects`,
                    },
                ],
                externalLinks: [
                    {
                        name: `Email`,
                        url: `mailto:amar.om1994@gmail.com`,
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: `UA-72571256-3`,
                anonymize: true,
            },
        },
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-offline`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Amar Prakash Pandey`,
                short_name: `Amar`,
                description: `Personal website of Amar Prakash Pandey. Currently working as a Solutions Consultant at Sahaj Software. Past Google Summer of Code. Open Source Community Member at DuckDuckGo. Maintainer at Open Source Help Community.`,
                start_url: `/`,
                background_color: `#FFFFFF`,
                theme_color: `#3AAFA9`,
                display: `standalone`,
                icon: `./static/favicon/favicon.png`,
            },
        },
    ],
};
