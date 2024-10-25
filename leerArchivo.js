const fs = require('fs');

fs.readFile('listado.txt', 'utf8', (error, listado) =>{
	
	if(error) throw error;
	console.log(listado);
	
})