
import User from "../models/use.js";
import bcrypt from 'bcrypt';
import async from'async';
import crypto from 'crypto';
import nodemailer from'nodemailer';

var saltRounds = 10;
// export async function login(req, res) {
//     User
//     .findOne({ "login": req.body.login, "password": req.body.password })
	
//     .then(doc => {
		
//         res.status(200).json(doc);
//     })
//     .catch(err => {
//         res.status(500).json({ error: err });
//     });
// }
export async function signup(req, res) {
	const  hashedPwd = await bcrypt.hash(req.body.password, saltRounds);
	try{
        const  user = await User.findOne({ login : req.body.login })
        if(user)
        {
            return res.status(500).json(null)
        } 
        else
        {
            const user = new User({
                login: req.body.login,
                password: hashedPwd
            })
            const newUser = await user.save()
            // await Followers.updateMany({ '_id': newUser.followers }, { $push: { users: newUser._id } });
             res.status(200).json(newUser)
        }
    }catch(err)
    {
        return res.json(null)
    }
	/*User.create({ login: req.body.login,
		password: hashedPwd,	
		})
	  .then(
		res.status(200).json({
			login: req.body.login,
		  password: req.body.password,
		}))
	  .catch((err) => {
		res.status(500).json({ error: err });
	  });
	  
	  */
	}

	export async function getUserEmail(req, res){
        //const iduser = req.body.iduser

        const user = await User.findOne({ login: req.body.login });
		
        //const user = await User.findOne({ iduser : iduser });
        res.status(200).send(user);
    }



	export async function login(req, res) {
		const user = await User.findOne({ login: req.body.login });
		if (user) {
		  // check user password with hashed password stored in the database
		  const validPassword = await bcrypt.compare(req.body.password, user.password);
		  if (validPassword) {
			res.status(200).json(user);
		  }
		else {
		  res.status(400).json({ error: "Invalid Password" });
		}
	  } else {
		res.status(401).json({ error: "User does not exist" });
	  }
	  };


	export function patchOnce(req, res) {
		User
		.findOneAndUpdate({ "login": req.body.login }, { "password": req.body.password})
		.then(doc => {
			res.status(200).json(doc);
		})
		.catch(err => {
			res.status(500).json({ error: err });
		});
	}


	  export async function forgot(req, res, next) {
		async.waterfall([
			function (done) {
				crypto.randomBytes(20, function (err, buf) {
					var token = buf.toString('hex');
					done(err, token);
				});
			},
			function (token, done) {
				User.findOne({ login: req.body.login }, function (err, user) {
					if (!user) {
						console.log('No account with that email address exists.')
					}
	
					user.resetPasswordToken = token;
					user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
	
					user.save(function (err) {
						done(err, token, user);
					});
				});
			},
			function (token, user, done) {
				let smtpTransport= nodemailer.createTransport({
					service: 'gmail',
					auth: {
					  user: 'safa.hathroubi@esprit.tn',
					  pass: '213JFT0761'
					}
				
				});
				var mailOptions = {
					to: user.login,
					from: 'safa.hathroubi@esprit.tn',
					subject: 'Password Reset',
					text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
						'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
						'http://' + req.headers.host + '/reset/' + token + '\n\n' +
						'If you did not request this, please ignore this email and your password will remain unchanged.\n',
						
				};
				smtpTransport.sendMail(mailOptions, function (err) {
					console.log('mail sent');
					res.send("mail sent");
					done(err, 'done');
				});
			}
		], function (err) {
			if (err) return next(err);
		});
	};


	

