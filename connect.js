var mysql= require('mysql');
module.exports= function(){
var conn=mysql.createConnection({
	host: 'sql12.freesqldatabase.com',
	user: 'sql12272608',
	password: 'lSIsQXLWEk',
    database: 'sql12272608'

});

conn.connect(function(error)
{
	if(error) throw error;
	console.log("connected");
});

return conn;

}
