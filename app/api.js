const api = {};

// http://localhost:8080/api/hello
api.hello = function(params, callback) {
     callback(null, {"say": "hello!"});
}

// http://localhost:8080/api/hello
api.signup = function(params, callback) {
     const user = new UserSchema(params);

     user.save((err, result) => {
          callback(null, result);
     });
}

api.login = function (params, callback) {
     // {email: "test@sample.com", password: "123"}
     UserSchema.find(params)
          .then(items => {
               callback(null, items);
          })
          .catch(err => {
               callback('Wrong email/password');
          });
}

module.exports = api;