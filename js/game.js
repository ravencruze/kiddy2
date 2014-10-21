window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       || 
          window.webkitRequestAnimationFrame || 
          window.mozRequestAnimationFrame    || 
          window.oRequestAnimationFrame      || 
          window.msRequestAnimationFrame     || 
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();


$(window).load(function() {
game.init();
});



var game = {

	WIDTH: 800, 
    HEIGHT:  600, 
    scale:  1,
    offset: {top: 0, left: 0},
    entities: [],
    nextBubble: 100,
    score: {
        taps: 0,
        hit: 0,
        escaped: 0,
        accuracy: 0
    },
    RATIO:  null,
    currentWidth:  null,
    currentHeight:  null,
    canvas: null,
    ctx:  null,
    ua:  null,
    android: null,
    ios:  null,
	
	init: function(){
		
		game.RATIO = game.WIDTH / game.HEIGHT;
        game.currentWidth = game.WIDTH;
        game.currentHeight = game.HEIGHT;
		
		$('.gamelayer').hide();
		$('#gamestartscreen').show();
		$('#gamecanvas').show();
		game.canvas = document.getElementsByTagName('canvas')[0];
		
		game.canvas.width = game.WIDTH;
        game.canvas.height = game.HEIGHT;
		
		game.context = game.canvas.getContext('2d');
		
		game.resize();
	},
	
	resize: function() {
    
        game.currentHeight = window.innerHeight;
        game.currentWidth = game.currentHeight * game.RATIO;
        if (game.android || game.ios) {
            document.body.style.height = (window.innerHeight + 50) + 'px';
        }
        game.canvas.style.width = game.currentWidth + 'px';
        game.canvas.style.height = game.currentHeight + 'px';
        game.scale = game.currentWidth / game.WIDTH;
        game.offset.top = game.canvas.offsetTop;
        game.offset.left = game.canvas.offsetLeft;
    	window.setTimeout(function() {
                window.scrollTo(0,1);
        }, 1);
    },
	
	mabout: function(){
		$('.gamelayer').hide();
		$('#gamestartscreen').hide();
		$('#levelselectscreen').show();	
	},
	
	mback: function(){
		$('.gamelayer').hide();
		$('#gamestartscreen').show();
		$('#levelselectscreen').hide();	
	},
	
	mhtp: function(){
		$('.gamelayer').hide();
		$('#gamestartscreen').hide();
		$('#levelselectscreen').hide();
		$('#gamehtp').show();
	}

};
