# To run the Project:

1. do npm/yarn/pnpm install

2. create a **config.env** file at the project root level and add these following variables. elsee the app will not work.

| variable  | value                                         |
| --------- | --------------------------------------------- |
| NODE_ENV  | set this to = '_development_'/ '_production_' |
| PORT      | enter the port number to serve the app        |
| MONGO_URI | enter mongodb connection uri                  |

3. to run in development mode, run `npm run dev`
4. to run in production mode, first run `npm run build` and then `npm start`
