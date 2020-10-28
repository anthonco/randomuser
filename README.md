# AbsenceSoft Code Challange "randomuser"

10/27/2020
Corey Anthony

See requirements in challange.md

### Features
- Fetch from randomuser API using Axios
- Stubbed out Node Express API server
- Production Deployment script to Heroku

### ToDo
- Make search work with upper or lower case search term.
- Sort Alphabetically
- Create container component with up/down pagination to retrieve the next/previous set of 10 records.

### Test Search Terms
`Khl`  
`ais`
`Her`
`exa`

### Running the app in dev

- From the root directory run `yarn dev`
- To terminate `ctrl+C`

- If you wish to run the API server itself, from within the root directory run `node server.js`

### Yarn

- `yarn start` Starts the development server.
- `yarn build` Bundles the app into static files for production.
- `yarn test` Starts the test runner.
- `yarn eject` Removes this tool and copies build dependencies, configuration files and scripts into the app directory. If you do this, you can’t go back!

### Heroku deployment
- App name `cna-randomuser`
- Pipeline name `prod`

- https://cna-randomuser.herokuapp.com/