module.exports = function(app){

 var articles = require('./../controllers/articles.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('/api/articles')
	.get(articles.list)
	.post(users.requiresLogin, articles.create);

  app.route('/articles/api/articles/:articleId')
	.get(articles.read)
  .delete(users.requiresLogin, articles.delete);

	app.route('/articles/edit/api/articles/:articleId')
	.get(articles.read)
	.put(users.requiresLogin, articles.update);

	app.route('/upload/csv').post(articles.upload);
	app.route('/getcsv/:idx/:key').get(articles.getCSV);
	app.route('/swipegetCSV').get(articles.swipegetCSV);
	

app.param('articleId', articles.articleByID);


}
