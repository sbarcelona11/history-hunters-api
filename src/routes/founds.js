import express from 'express';
const foundsRouter = express.Router();
const {
    getAllFounds,
    getFound,
    getAllFoundsForUser,
    addFound,
    updateFound,
    deleteFound,
    searchFound
} = require('../controllers/founds');

foundsRouter.get('/', getAllFounds);
foundsRouter.get('/:id', getFound);
foundsRouter.get('/user/:userId', getAllFoundsForUser);
foundsRouter.get('/search/key', searchFound);
foundsRouter.post('/add', addFound);
foundsRouter.put('/update/:id', updateFound);
foundsRouter.delete('/delete/:id', deleteFound);

export default foundsRouter;
