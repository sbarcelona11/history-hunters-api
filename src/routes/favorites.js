import express from 'express';

const favoritesRouter = express.Router();
import {
    getAllFavorites,
    getFavorite,
    getAllFavoriteForUser,
    addFavorite,
    updateFavorite,
    deleteFavorite
} from '../controllers/favorites.js';

favoritesRouter.get('/', getAllFavorites);
favoritesRouter.get('/:id', getFavorite);
favoritesRouter.get('/user/:userId', getAllFavoriteForUser);
favoritesRouter.post('/add', addFavorite);
favoritesRouter.put('/update/:id', updateFavorite);
favoritesRouter.delete('/delete/:id', deleteFavorite);

export default favoritesRouter;
