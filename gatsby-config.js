require(`dotenv`).config({
    path: `.env`,
});

module.exports = {
    pathPrefix: `/test`,
    siteMetadata: {
        author: `Amar Prakash Pandey`,
        siteUrl: `https://www.amarpandey.me/test/`,
        siteHeadline: `This is the personal website of Amar Prakash Pandey.`,
        titleTemplate: `%s — Amar Prakash Pandey`,
        siteImage: `/meta-image-default.png`,
        siteTitle: `Amar Prakash Pandey`,
        siteTitleAlt: `Amar Prakash Pandey`,
        siteDescription: `This is the personal website of Amar Prakash Pandey. Solutions Consultant at Sahaj. Past TRDDC, TCS, GSoC 2017. Open Source Community Member at DuckDuckGo. Maintainer at Open Source Help Community.`,
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
                description: `This is the personal website of Amar Prakash Pandey. Solutions Consultant at Sahaj. Past TRDDC, TCS, GSoC 2017. Open Source Community Member at DuckDuckGo. Maintainer at Open Source Help Community.`,
                start_url: `/`,
                background_color: `#FFFFFF`,
                theme_color: `#3AAFA9`,
                display: `standalone`,
                icon: `./static/favicon/favicon.png`,
            },
        },
    ],
};
