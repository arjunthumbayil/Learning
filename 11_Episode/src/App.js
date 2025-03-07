import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import AppLayout from './components/AppLayout';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
//import Grocery from './components/Grocery';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//Chunking
//Code Splitting
//Dynamic Bundling
//On Demand Loading
//Lazy Loading

const Grocery = lazy(() => import('./components/Grocery'));

const appRouter = createBrowserRouter(
  [
    {
      path: '/',
      element: <AppLayout />,
      children: [
        { path: '/', element: <Body /> },
        { path: '/about', element: <About /> },
        { path: '/contact', element: <Contact /> },
        {
          path: '/grocery',
          element: (
            <Suspense fallback={<h1>Loading...</h1>}>
              <Grocery />
            </Suspense>
          ),
        },
        { path: '/restaurant/:resId', element: <RestaurantMenu /> },
      ],
      errorElement: <Error />,
    },
  ],
  {
    future: {
      v7_startTransition: true, // Enable the future flag
      v7_relativeSplatPath: true, // Enable the future flag // check for react-router-dom V7
    },
  }
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider
    router={appRouter}
    //future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
  />
);
