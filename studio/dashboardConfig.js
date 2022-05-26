export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '628fa539deda6f1bc1c339bb',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-h8dw112y',
                  apiId: '70a1af27-57ed-4658-b0c8-e9ba83376901'
                },
                {
                  buildHookId: '628fa53a7ac060171ec9293c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-z82x2kur',
                  apiId: '4e3cdf1f-b0fd-4a26-b2da-1236272288e7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ltraccount/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-z82x2kur.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
