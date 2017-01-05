var render = require('./lib/render')
var logger = require('koa-logger')
var serve = require('koa-static')
var route = require('koa-route')
var path = require('path')
var koa = require('koa')
var app = module.exports = koa()

app.use(logger())
app.use(serve(path.join(__dirname, 'public')))

app.use(route.get('/', root))
app.use(route.get('/test', test))

function* root() {
    this.body = yield render('index')
}

function* test() {
    var firstname = "John";
    var person = createPerson(firstname);

    this.type = 'json'
    this.body = person
}

var port = process.env.PORT || 3000

app.listen(port, function () {
    console.log(`Server listening on port ${port}`)
})

function createPerson(firstname) {
    var person = {
        firstname,
        lastname: "Doe"
    }
    return person
}