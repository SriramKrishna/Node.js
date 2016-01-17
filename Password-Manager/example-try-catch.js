function doWork() {
	throw new Error('unable to do work!');
}
try {
	doWork();
	throw new Error('unable to decrypt accounts');
}catch(e){
	console.log(e.message);
}finally  {
	console.log('finally block executed');
}
console.log('try catch ended'); 