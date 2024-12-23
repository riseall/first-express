const express = require('express');

const app = express();

app.use(()=>{
    console.log('Get Request');
})

app.listen(8080, () => {
    console.log('Server running on http://localhost:8080');
});