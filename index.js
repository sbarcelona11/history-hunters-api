import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import db from './src/config/db.js';
import userRouter from './src/routes/users.js';
import placesRouter from './src/routes/places.js';
import foundRouter from './src/routes/founds.js';
import commentsRouter from './src/routes/comments.js';
import reviewsRouter from './src/routes/reviews.js';
import favoritesRouter from './src/routes/favorites.js';

const app = express();

app.use(morgan('combined'))
app.use(bodyParser.json());

// CORS
app.use((req, res, next) => {
    res.header('Content-Type', 'application/json');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Routes
const PORT = process.env.PORT || 4000;

app.get('/', async (req, res) => {
    res.json({ status: 200, message: "Our History Hunters app works" })
});

// User routes
app.use('/users', userRouter);
// Places routes
app.use('/places', placesRouter);
// Objects routes©
app.use('/founds', foundRouter);
// Comments routes
app.use('/comments', commentsRouter);
// Reviews routes
app.use('/reviews', reviewsRouter);
// Reviews routes
app.use('/favorites', favoritesRouter);

db.sequelize.sync().then(() => {
    console.log('Connection to the database successful!');
    app.listen(PORT, () => console.log(`App listening at port ${PORT}`));
});

