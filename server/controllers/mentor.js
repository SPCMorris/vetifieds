let ControllerPrototype = require('./controller.prototype.js'),
  authHelper = require('../helpers/authHelper'),
  Mentor = require('../db/models/mentors'),
  Q = require('q');

module.exports = (function() {
  let controller = ControllerPrototype.create({
    path: '/api/mentors'
  });
  let router = controller.router;

  router.get('/', function(req, res) {
    res.send('We hit /mentor');
  })

  router.get('/:location', function(req, res) {

    // if (!authHelper.isAuthenticated()) return res.status(401).send('User unauthorized');

    let getMentors = Q.nbind(Mentor.find, Mentor);
    getMentors({
      location: req.params.location
    })
      .then(function(response) {
        res.json({ data: response });
      })
      .fail(function (error) {
        console.log("failed, line 23 in /mentor")
        next(error);
      });
  });

  router.post('/', function(req, res) {

    if (!authHelper.isAuthenticated()) return res.status(401).send('User unauthorized');

    req.assert('email', 'Email is not valid').isEmail();
    req.assert('email', 'Email cannot be blank').notEmpty();
    req.assert('type', 'Type cannot be blank').notEmpty();
    req.sanitize('email').normalizeEmail({ remove_dots: false });

    let errors = req.validationErrors();

    if (errors) return res.status(400).send(errors);

    let postMentor = Q.nbind(Mentor.create, Mentor);
    postMentor({
      type: req.body.type,
      fullname: req.body.fullname,
      username: req.body.username,
      imageUrl: req.body.imageUrl,
      location: req.body.location,
      industry: req.body.industry,
      unit: req.body.unit,
      mos: req.body.mos,
      phone: req.body.phone,
      email: req.body.email
    })
      .then(function () {
        console.log('post successful');
        res.json({success: true});
      })
      .fail(function (error) {
        console.log("failed, line 45 in /mentor")
        next(error);
      });
  });

  return controller;
})();