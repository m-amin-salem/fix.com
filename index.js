const express = require('express');
const app = express();
app.use(express.json());


// Get Movies
const movies = [
    {id: 1, name: 'The Lion King'},
    {id: 2, name: 'How to train your Dragon'}
];

app.get('/fix.com/movies/', (req, res) => {
    res.send(movies);
});

app.get('/fix.com/movies/:id', (req, res) => {
    const movie = movies.find(c => c.id === parseInt(req.params.id));
    if (!movie) return res.status(404).send('Not Found!');
    res.send(movie);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port}..`));