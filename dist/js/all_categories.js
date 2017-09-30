viewAllCategories.addEventListener('click', ()=>{
	allCategories.style.display = "block";
	allCategories.style.height = "100vh";
})

closeAllCategories.addEventListener('click', ()=>{
	close();
})

function close(){
	allCategories.style.height = "0vh";
	allCategories.style.display = "none";
}

Array.prototype.slice.call(allCategories.getElementsByClassName("display")[0].children).forEach(function(el, i){
	
	el.addEventListener('click', function(){
		
		var i = window.characters.indexOf(el.getElementsByClassName('event_item_name')[0].getAttribute('data'))
		var k = window.characters.indexOf(Box.className)
		var l = window.characters.length;
		var diff = (i - k)>0 ? i-k: l + (i - k);
		
		for(var j = 0; j<diff; j++){
			window.changeChar(1);
		}
		close();
	})
})