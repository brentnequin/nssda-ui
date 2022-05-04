import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-5d7259d4","/guide.html",{"title":"Getting Started"},["/guide","/guide.md"]],
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-ceef3182","/components/bio-preview-card.html",{"title":"bio-preview-card"},["/components/bio-preview-card","/components/bio-preview-card.md"]],
  ["v-1020f180","/components/",{"title":"Components"},["/components/index.html","/components/README.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: '404',
      path: '/:catchAll(.*)',
      component: Vuepress,
    }
  ]
)
