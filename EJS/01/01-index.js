// node下执行
let ejs = require('ejs'),
    people = ['geddy', 'neil', 'alex'],
    html = ejs.render('<%= people.join(", ")%>', { people: people });

    console.log(html)
