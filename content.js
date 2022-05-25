
const remover =

setInterval(
    		()=>{
    			var btn = document.getElementById("mp");
    			var watermark = document.getElementById("watermark");
    			
    			if(btn!==null){
	        		btn.parentNode.removeChild(btn);    	
				document.getElementsByClassName("big circular")[1].innerText = "Logout Prevented"
    			}
    			
    			if(watermark!==null){
    				watermark.parentNode.removeChild(watermark);    	
    			}
		}
,1000)
		
