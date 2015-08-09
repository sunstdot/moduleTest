require.config({
	baseUrl:'js'
})
define(['b'],function(b){
	console.log('run.js'+b.color+','+b.width);
})
