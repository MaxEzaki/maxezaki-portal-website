$(function(){
	var Module = {
        initialize : function () {
            $(".tab-item").on("click", $.proxy(this.chngActive,this))
        },
	        
	    /*
		 * 
		 */
        chngActive : function (e) {
	        	$(".tab-item").children().removeClass("active");
				$(e.target).addClass("active");
				this.onload();
	    },
	    
	    onload : function(e){
		    for( i=1; i<3; i++ ){
			    if( $(".js__open_content" + i).hasClass("active") ){
			    	$(".js__tab_content" + i).removeClass("hide");
		    	}   
		    }
	    },
	    
	};
    Module.initialize();
    Module.onload();

});