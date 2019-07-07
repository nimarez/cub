var express = require('express');
var router = express.Router();
var passport = require('passport');

router.post('/', function(req, res, next) {
    res.json({"songs": ["bad guy", "crazy town"]})
});


const SpotifyStrategy = require('passport-spotify').Strategy;

passport.use(
    new SpotifyStrategy(
        {
            clientID: client_id,
            clientSecret: client_secret,
            callbackURL: 'http://localhost:8888/auth/spotify/callback'
        },
        function(accessToken, refreshToken, expires_in, profile, done) {
            User.findOrCreate({ spotifyId: profile.id }, function(err, user) {
                return done(err, user);
            });
        }
    )
);


module.exports = router;
