module.exports ={
   "type": "postgres",
   "url":process.env.DATABASE_URL,
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/entity/**/*.ts"
   ],
   "migrations": [
      "src/dist/src/migration/**/*.js"
   ],
   "subscribers": [
      "src/dist/src/subscriber/**/*.js"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}