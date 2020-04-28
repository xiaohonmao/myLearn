// 输出 hello world！

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(port, () => console.log(`Example app listening on port ${port}`))

// 服务运行起来之后在浏览器端打开 http://localhost:3000/