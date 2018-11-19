var express = require('express');
var app = express();
var past = Date.now();
app.get('/', (req,res)=>{
	interval = (Date.now()-past)/1000;
	past = Date.now()
	const {headers} = req;
	var headersTag = '<table>';
	for(var name in headers){
		headersTag += `<tr><td>${name}<td><td>${headers[name]}</td></tr>`;
	}
	headersTag += '</table>';
	var html = `
	<html>
		<head>
			<!--<meta http-equiv="refresh" content="1" >-->
			<script>
					
			</script>
		</head>
		<body>
			<h1>Interval</h1>
			<p>${interval}</p>
			<h1>Header</h1>
			<p>${headersTag}</p>
			<h1>Cache</h1>
			<form>
				<p>Cache-Control: max-age = <input type="text" name="cache" value="${req.query.cache ? req.query.cache : ''}"></p>
				<p><input type="submit"></p>
			</fomr>
		</body>
	</html>
	`;
	if(req.query.cache){
		res.setHeader('Cache-Control', `max-age=${req.query.cache}`);
	}
	res.end(html);
}).listen(3000);
