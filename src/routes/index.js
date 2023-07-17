const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app){
    // req: Request
    // res: Response

    // Action ---> Dispatcher ---> Function handler (callback)

    // app.get('/', (req, res) => {
    //     res.render('home');
    // })

    app.use('/news', newsRouter); 
    app.use('/', siteRouter);
}

module.exports = route;
