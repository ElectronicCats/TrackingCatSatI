
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { 
  	 title: "GPS API 4 Sacitec"
  	,descrption: "Prueba GPS API para Sacitec"
   });
};