                         /$$                                     /$$      
                        | $$                                    | $$      
 /$$  /$$  /$$  /$$$$$$ | $$$$$$$   /$$$$$$   /$$$$$$   /$$$$$$$| $$   /$$
| $$ | $$ | $$ /$$__  $$| $$__  $$ /$$__  $$ |____  $$ /$$_____/| $$  /$$/
| $$ | $$ | $$| $$$$$$$$| $$  \ $$| $$  \ $$  /$$$$$$$| $$      | $$$$$$/ 
| $$ | $$ | $$| $$_____/| $$  | $$| $$  | $$ /$$__  $$| $$      | $$_  $$ 
|  $$$$$/$$$$/|  $$$$$$$| $$$$$$$/| $$$$$$$/|  $$$$$$$|  $$$$$$$| $$ \  $$
 \_____/\___/  \_______/|_______/ | $$____/  \_______/ \_______/|__/  \__/
                                  | $$                                    
                                  | $$                                    
                                  |__/                                    



# Webpack Config Generator

> Generates a starter webpack config file

## Run the project locally

- `git clone https://github.com/Webpack-Config-Generator/Webpack-Config-Generator Webpack-Config-Generator`
- `cd Webpack-Config-Generator`
- `npm install`
- `npm start`

The client will run on [port 3000](http://localhost:3000/).

The server will run on [port 4000](http://localhost:4000/).

## Entry points

- Server: `server/server.js`
- Client: `src/index.js`

## Run the testing suite

- `npm run test`
- `npm run test:coverage` to see a coverage report
- `npm run test:update` to update files being tracked by snapshots

## Available routes

### Main routes

- `/` => `returns html`

### API routes

- `/api/ping` => `returns JSON`
- `/api/configurator/create` => `returns JSON`
  - Returns the final product in the form of an object

### AUTH routes

- `/auth/ping` => `returns JSON`
- `/auth/set` => `returns Status 204`
  - Sets the cookie

## License

MIT License
