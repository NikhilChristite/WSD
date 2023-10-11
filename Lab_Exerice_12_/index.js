const fs = require('fs');
const path = require('path');

//create a directory
fs.mkdir(path.join(__dirname, '/posts'), (err) => {
    if(err){
        console.log(err);;
        console.log('folder with this name already exists');
        return;
    }
    console.log('posts folder created')
});
