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
                  buildHookId: '61260690d610d4b1fdd85c99',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-test-2-studio',
                  apiId: 'e6e885e9-b0df-4a7f-9d60-1bfb456e7d40'
                },
                {
                  buildHookId: '61260690d610d4afc6d85d1b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-test-2',
                  apiId: 'a09e2d3e-49cf-42c4-9791-abd97b31d995'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/swensonjacob/sanity-gatsby-portfolio-test2',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-test-2.netlify.app',
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
