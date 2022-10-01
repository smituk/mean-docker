require('./required');
require('./config');

const app = express();
app.use(bodyparser({limit: '10mb'}));
app.use(express.static('public'));

mongoose
    .connect(config.mongo, {useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));;

const api = require('./api');

app.all('/api/:method', (req, res) => {
    if(!api[req.params.method] || !_.isFunction(api[req.params.method])) {
        return res.send({error: "Unknown method"});
    }
    api[req.params.method](_.extend({}, req.query, req.body), (e, r) => {
        res.send({error: e || undefined, result: r || undefined});
    });
});

app.listen(config.port, () => {
    console.log(`Server listening on http://localhost:${config.port}/`);
});