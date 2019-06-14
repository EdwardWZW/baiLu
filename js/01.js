let index = 0;
let index2 = 0;
let limWidth = $(window).innerWidth();
// let limWidth = 100%;

let counter;

function autoMove(){
	if(counter != null){
			return;
		}

	counter = setInterval(autoplay,2000);
    
}

function autoplay(){
	move();
	cliMove("right");
}

function move(){
	index++;
	if(index > 3) {
       $(".img-list").css({
       	 left:"0"
       })
       index = 1;
	}
    dotMove($(".item").eq(index>2?0:index));
    $(".img-list").animate({
    	left:index*-limWidth
    })
    // console.log($(".img-list"))
    // console.log(11111);
}
function cliMove(direction){
    if(direction === "right"){
        index2++;
        if(index2 > 3){
        	$(".img-list2").css({
        		left:"0"
        	})
        	index2 = 1;
        	
        }
    }else if(direction === "left"){
    	index2--;
    	if(index2 <0 ){
    		
    		$(".img-list2").css({
    			left:3*-592
    		})
    		index2 = 2;
    	}
    }

    $(".img-list2").animate({
			left:index2 * -592
	})
}



$(".item").click(function(){
	index = $(this).index()
	console.log(index);
})
$(".left").click(function(){
	cliMove("left");
	console.log(index);
})
$(".right").click(function(){
	cliMove("right");
	console.log(index);
})

function dotMove(dom){
    $(".active").removeClass("active");
    dom.addClass("active");
}

autoMove();