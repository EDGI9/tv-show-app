import BaseLayout from '../layouts/BaseLayout.vue';
import Home from '../views/Home.vue';
import Show from '../views/Show.vue';
import Episode from '../views/Episode.vue';
import MissingPage from '../views/MissingPage.vue';

const routes = [
    {
      path: '/',
      name: 'Home',
      component: BaseLayout,
      children: [
        {
          path: '',
          name: 'HomeChild',
          component: Home,
        },
      ]
    },
    {
      path: '/shows/:id',
      name: 'Shows',
      component: BaseLayout,
      children: [
        {
          path: '',
          name: 'Show',
          component: Show,
        },
        {
          path: 'episodebynumber',
          name: 'Episode',
          component: Episode,
          props: route => ({
            season: route.query.season,
            episode: route.query.number,
          }),
        },
      ]
    },
    {
      path: '/error',
      name: 'Error',
      component: BaseLayout,
      children: [
        {
          path: '',
          name: 'MissingPage',
          component: MissingPage,
        },
      ]
    },
  ];

  export default routes