import React from 'react';
import {renderToString} from 'react-dom/server';
import {match, RouterContext} from 'react-router';
import createLocation from 'history/lib/createLocation';

module.exports = function(app) {

  const routes = {
    path: '/',
    component: require('./../../app/components/core/Template').default,
    indexRoute: {
      component: require('./../../app/components/core/Home')
    },
    childRoutes: [
      {
        path: '/excellence',
        component: require('./../../app/components/excellence/Excellence')
      },{
        path: '/improvement',
        component: require('./../../app/components/improvement/Improvement')
      },{
        path: '/funding',
        component: require('./../../app/components/funding/Funding')
      },{
        path: '/wiki',
        component: require('./../../app/components/pages/Wiki')
      },{
        path: '/glance',
        component: require('./../../app/components/pages/Glance')
      },{
        path: '/analysis',
        component: require('./../../app/components/pages/Analysis')
      },{
        path: '/articles/create',
        component: require('./../../app/components/articles/CreateArticle')
      }, {
        path: '/articles',
        component: require('./../../app/components/articles/ListArticles')
      }, {
        path: '/articles/:id',
        component: require('./../../app/components/articles/ViewArticle')
      }, {
        path: '/articles/edit/:id',
        component: require('./../../app/components/articles/EditArticle')
      }, {
        path: '/signup',
        component: require('./../../app/components/users/Signup')
      }, {
        path: '/signin',
        component: require('./../../app/components/users/Signin')
      },
      {
        path: '/signout',
        component: require('./../../app/components/users/SignOut')
      }, {
        path: '/users/edit/:id',
        component: require('./../../app/components/users/EditUserProfile')
      }, {
        path: '/uploadcsv',
        component: require('./../../app/components/upload/UploadCSV')
      }
    ]
  };

  app.use((req, res, next) => {
    const location = createLocation(req.path);

    // Note that req.url here should be the full URL path from
    // the original request, including the query string.
    match({
      routes,
      location
    }, (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message)
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      } else if (renderProps) {
        // renderWithData(req,res, renderProps);
        var generated = renderToString(< RouterContext {
          ...renderProps
        } />);
        res.render('./../app/index.ejs', {reactOutput: generated});

      } else {
        next();
      }
    })
  })
}

function renderIsoOutput(data, renderProps, res) {}
