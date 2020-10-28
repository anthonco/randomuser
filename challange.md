# AbsenceSoft Code Challange

10/27/2020

## Test:
Using the random user API (https://randomuser.me/documentation) – create a React app that has a user search that allows for searching by email and last name. User results should come back similar to slacks @mention functionality (but not using @mention, just a general search)

### Requirements:

- Random user API should return 100 results stored in the app
- Main component should be a search bar.
- When user types 3 characters or more it will display 10 filtered results below search
- User results should display:
- User thumbnail
- First name
- Last name
- Telephone number
- When there are no users in the filter it should show a message in place of the user table saying “No results were found”.

### Nice to haves:

- Results come back alphabetically sorted by last name styled similar to how slack displays their @mention functionality.
- Up and down arrows select the filtered users and enter selects user
- Selected user displays below search box.
- Nicely styled.


### Running the app in dev

- From the root directory run `yarn dev`
- To terminate `ctrl+C`

- If you wish to run the API server itself, from within the root directory run `node server.js`

### Yarn

- `yarn start` Starts the development server.
- `yarn build` Bundles the app into static files for production.
- `yarn test` Starts the test runner.
- `yarn eject` Removes this tool and copies build dependencies, configuration files and scripts into the app directory. If you do this, you can’t go back!
