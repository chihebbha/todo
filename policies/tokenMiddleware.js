module.exports.verify = function(req, res, next) {

	const repository = require('../respositories/UserRepository');

	if ((!req.headers['token']) && (req.url !== "/users/login") && (
			req.url !== "/todos/all")&& (
					req.url !== "/todos/doc")  && (!req.url.includes("users"))) {
		return res.status(401).end('error token')
	} else {
		repository.find({token:req.headers['token']}).then(account => {
			req.account = account[0]


				if (req.account) 	next()
				 else return res.status(401).end('error token')


		});
	}

}
