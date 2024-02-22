// routes/routes.js
import Home from '../pages/Home';

const RouteConfig = () => {
  // initiate hooks and pass as props
  const routes = [
    {
      path: '/',
      element: Home,
      props: {
        // Add props if available
      },
    },
  ];

  return routes;
};

export default RouteConfig;
