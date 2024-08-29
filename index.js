import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import db from './src/config/db.js';
import userRouter from './src/routes/users';
import productRouter from './src/routes/products';
import restaurantsRouter from './src/routes/restaurants';

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
// Products routes
app.use('/products', productRouter);
// Restaurants routes
app.use('/restaurants', restaurantsRouter);

db.sequelize.sync().then(() => {
    console.log('Connection to the database successful!');
    app.listen(PORT, () => console.log(`App listening at port ${PORT}`));
});

