'use strict';

module.exports = {
	port: process.env.PORT || 9001,
	templateEngine: 'swig',
	// The secret should be set to a non-guessable string that
	// is used to compute a session hash
	sessionSecret: 'reactdb'
};
