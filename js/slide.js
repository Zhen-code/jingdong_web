jQuery(document).ready(function() {
let cbc=$('.channel-block-content');
var pre=$('#pre');
var next=$('#nex');
function animate(offset){
var left=cbc.css('transform').replace(/[^0-9\-,]/,'').split(',')[4];
left=parseInt(left);
var newOffset=(left+offset);
if(newOffset>-1198){
cbc.css({"transform": "translateX("+-3594+"px)","transition":'all .1s'})	
}else if(newOffset<-3594){
cbc.css({"transform": "translateX("+-1198+"px)","transition":'all .1s'});	
}else{
cbc.css({"transform": "translateX("+newOffset+"px)","transition":'all .5s'})
}
}
pre.click(function() {
	animate(1198);
});
next.click(function() {
	animate(-1198);
});
});