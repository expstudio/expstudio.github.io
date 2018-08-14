function(){
	javascript: (
		function () {
			var elem = document.querySelectorAll(["body","html","div","section","header","footer","img"]);
			for( index=0; index < elem.length; index++ ) {
				removeGrayscale(elem[index]);
			}

			var str = "*{-moz-filter:grayscale(0)!important;-webkit-filter:grayscale(0)!important;-o-filter:grayscale(0)!important;-ms-filter:grayscale(0)!important;}";
			var node = document.createElement('style');
			node.innerHTML = str;
			document.head.appendChild(node);

			function removeGrayscale( element ){
				var filter = window.getComputedStyle(element,null).getPropertyValue("filter");
				if(filter.startsWith('grayscale')){
					element.style.setProperty("filter", "none", "important");
				}
				filter = window.getComputedStyle(element,null).getPropertyValue("-webkit-filter");
				if(filter.startsWith('grayscale')){
					element.style.setProperty("-webkit-filter", "none", "important");
				}
				filter = window.getComputedStyle(element,null).getPropertyValue("-o-filter");
				if(filter.startsWith('grayscale')){
					element.style.setProperty("-o-filter", "none", "important");
				}
				filter = window.getComputedStyle(element,null).getPropertyValue("-ms-filter");
				if(filter.startsWith('grayscale')){
					element.style.setProperty("-ms-filter", "none", "important");
				}
			}
		}()
	)
}
