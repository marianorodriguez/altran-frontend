# Gnome Finder
App made in Next.js for Altran front-end exam

Running in development mode (service worker disabled)
`npm run dev`

Building for production:
`npm run build`

Starting the built app
`npm run start`

Testing the app
`npm run test`

external libraries used:
- @zeit/next-css: For importing stylesheets into the components.
- bulma: CSS framework based in flexbox to facilitate the app layouts and commonly used styles.
- next, next-offline: React framework to enable PWA characteristics like offline support and automatic caching.
- react, react-dom: React library.
- react-lazy-load: For lazy-loading images.
- react-redux, redux: To enable a redux store and connecting it to the app.
- redux-thunk: For dispatching functions, useful for fetching data with loading and error states.
- eslint, eslint-config-airbnb, eslint-plugin-import, eslint-plugin-jsx-ally, eslint-plugin-react: my linting choice.
- jest: to run the test suite.
