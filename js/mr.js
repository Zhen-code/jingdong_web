$(document).ready(function(){
	var mrlist=$(".right-carousel ul li");var index=0;
	var prev=$(".right-carousel .prev");
	var next=$(".right-carousel .next");
	function clearCurrent(){
		for(var i=0;i<mrlist.length;i++){
         $(mrlist[i]).attr('id', '');
	}
	}
	function gonext(){
		clearCurrent();
		index++;
		if(index>mrlist.length-1){
         index=0;
		}
		$(mrlist[index]).attr('id', 'mr-current');
	}
	function goprev(){
		clearCurrent();
		index--;
		if(index<0){
			index=mrlist.length-1;
		}
		$(mrlist[index]).attr('id', 'mr-current');
        
	}
	prev.click(function() {
		goprev();
	});
	next.click(function() {
		gonext();
	});
});