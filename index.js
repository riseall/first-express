const express = require('express');
const res = require('express/lib/response');

const app = express();

// app.use((req, res)=>{
//     console.log('Get Request');
//     res.send({
//         name: 'Rizal',});
// })

app.get('/', (req, res) => {
    res.send('This is Home Page');
});

app.get('/about', (req, res) => {
    res.send('This is About Page');
}); 

app.get('/product', (req, res) => {
    res.send('This is Product Page');
});

app.post('/product', (req, res) => {
    res.send('This is Product Page from POST');
});

app.get('*', (req, res) => {
    res.send('404 Page Not Found');
})

app.listen(8080, () => {
    console.log('Server running on http://localhost:8080');
});