const elasticsearch = require('elasticsearch')
const news = require('./news.json')
const client = new elasticsearch.Client({
    host: 'localhost:9200',
})

news.forEach(item => {
    client.index({ index: 'ir_project', type: 'news', body: item }, (err, res) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(res)
    })
})