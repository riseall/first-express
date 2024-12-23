const express = require('express');
const res = require('express/lib/response');

const app = express();

app.use((req, res)=>{
    console.log('Get Request');
    res.send({
        name: 'Rizal',});
})

app.listen(8080, () => {
    console.log('Server running on http://localhost:8080');
});