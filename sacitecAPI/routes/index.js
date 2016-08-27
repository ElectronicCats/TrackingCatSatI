
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {
  	 title: "CatSat Tracking"
  	,descrption: "Tracking CatSat I"
   });
};
