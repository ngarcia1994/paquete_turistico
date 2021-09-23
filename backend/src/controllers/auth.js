const User = require('../models/User');

exports.authenticate = async (req, res, next) => {
    // const testUser = User.create({
    //     user: 'admin',
    //     email: 'admin@test.com',
    //     password: 'admin1234',
    //     role: 'admin'
    // });
    const body = req.body;

    const email = body.email;
    const password = body.password;

    if (!email || !password) {
        return res.status(400).json({errors: [
            {
                message: 'email and password required'
            }
        ]});
    }

    const userFound = User.findOne({ email: email }, function(err, user) {
        if (err) {
            console.log(err);
            return res.status(400).json({message: 'Not found'});
        };

        if (user) {
            user.comparePassword(password, function(err, isMatch) {
                if (err) throw err;

                console.log(user);
                if (isMatch) {
                    res.json({
                        token: user.token,
                        name: user.user,
                        email: user.email,
                        role: user.role
                    });
                } else {
                    res.json({message: 'Wrong password'})
                }
            });
        } else {
            res.status(400).json({message: 'User not found'});
        }
    });
};
