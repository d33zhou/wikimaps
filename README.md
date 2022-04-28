# WikiMaps

## About

WikiMaps is a full-stack multi-page website that allows users to save maps with points of interest, allowing the curation of personalized attractions, events, restaurants, and more. Users can share maps publicly with others.

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information

- username: `labber`
- password: `labber`
- database: `midterm`

3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`

- Check the db folder to see what gets created and seeded in the SDB

7. Run the server: `npm run local`

- Note: nodemon is used, so you should not have to restart your server

8. Visit `http://localhost:8080/`

- Use the `npm run db:reset` command each time there is a change to the database schema or seeds.
  - It runs through each of the files, in order, and executes them against the database.

## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x
- LeafletJS
- Body parser
- Cookie session
- EJS
- Express
- Staticmaps
