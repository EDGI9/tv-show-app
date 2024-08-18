// @ts-ignore
import BaseLayout from '../layouts/BaseLayout.vue';
// @ts-ignore
import Home from '../views/Home.vue';
// @ts-ignore
import Show from '../views/Show.vue';
// @ts-ignore
import Episode from '../views/Episode.vue';
// @ts-ignore
import MissingPage from '../views/MissingPage.vue';


const routes = [
    {
      path: `/`,
      name: 'Home',
      component: BaseLayout,
      children: [
        {
          path: '',
          name: 'HomeChild',
          meta: { transition: 'fade' },
          component: Home,
        },
      ]
    },
    {
      path: `/shows/:id`,
      name: 'Shows',
      component: BaseLayout,
      children: [
        {
          path: '',
          name: 'Show',
          component: Show,
          meta: { transition: 'fade' },
        },
        {
          path: 'episodebynumber',
          name: 'Episode',
          component: Episode,
          meta: { transition: 'fade' },
          // @ts-ignore
          props: route => ({
            season: route.query.season,
            episode: route.query.number,
          }),
        },
      ]
    },
    {
      path: `/error`,
      name: 'Error',
      component: BaseLayout,
      children: [
        {
          path: '',
          name: 'MissingPage',
          component: MissingPage,
          meta: { transition: 'fade' },
        },
      ]
    },
  ];

  export default routes