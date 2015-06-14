(function ($) {

Drupal.behaviors.vimeowrap = {
  attach: function (context, settings) {
  	var playerid = settings.vimeowrap.playerid;

  	if(window.innerWidth < window.innerHeight && settings.vimeowrap.override != 1 && settings.vimeowrap.vimeowrapoptions.plugins.playlist.position == 'right') {
  		settings.vimeowrap.vimeowrapoptions.plugins.playlist.position = 'bottom';
    }	

    // Initialise the playlist	
    if(vimeowrap('player-' + playerid) != null) {
      vimeowrap('player-' + playerid).setup(settings.vimeowrap.vimeowrapoptions);


      if(settings.vimeowrap.vimeowrapoptions.plugins.playlist.size > 0) {
    	  var playlistsize = settings.vimeowrap.vimeowrapoptions.plugins.playlist.size;
      } else {
    	  var playlistsize = 200;
      }
    }  

    responsiveplayer = function() {

    	origwidth = $('#player-' + playerid + '_display').width();
    	origheight = $('#player-' + playerid + '_display').height();
    	ratio = origheight / origwidth;

        if (settings.vimeowrap.vimeowrapoptions.plugins.playlist.position == 'bottom') {
   
 		    $('#player-' + playerid).css('width', '100%');
    		var width = document.getElementById('player-' + playerid).offsetWidth;
    		var height = width * ratio;
    		var totalheight = height + playlistsize;
    		$('#player-' + playerid).css('height', totalheight + 'px');
    		$('#player-' + playerid + '_playlist').css('width', '100%');
    		$('#player-' + playerid + '_playlist_wrap').css('width', '100%');
    		$('#player-' + playerid + '_display').css('width', '100%');
    		$('#player-' + playerid + ' iframe').attr('width', '100%');
    		$('#player-' + playerid + '_display').css('height', height + 'px');
    		$('#player-' + playerid + '_playlist').css('top', height + 'px');
    		$('#player-' + playerid + ' iframe').attr('height', height);

       }
       if(settings.vimeowrap.vimeowrapoptions.plugins.playlist.position == 'right') {
       	   origplaylistsize = $('#player-' + playerid + '_playlist').width();
       	   playlistpercent = origplaylistsize / (origwidth + origplaylistsize);
       	   displaypercent = origwidth / (origwidth + origplaylistsize);

       	   $('#player-' + playerid).css('width', '100%');
    		var width = document.getElementById('player-' + playerid).offsetWidth;
    		var height = width * displaypercent * ratio;
    		/*alert('origwidth: ' + origwidth + 
    			', origheight'  + origheight + 
    			', ratio'  + ratio + 
    			', origplaylistsize' + origplaylistsize + 
    			', playlistpercent ' + playlistpercent  + 
    			', displaypercent'  + displaypercent + 
    			', width' + width + 
    			', height ' + height); */
    		

    		$('#player-' + playerid).css('height', height + 'px');
    		$('#player-' + playerid + '_playlist').css('width', (width * playlistpercent) + 'px');
    		$('#player-' + playerid + '_playlist').css('left', (width * displaypercent) + 'px');
    		$('#player-' + playerid + '_playlist_wrap').css('width', '100%');
    		$('#player-' + playerid + '_display').css( 'width', (width * displaypercent) + 'px');
    		$('#player-' + playerid + '_display > iframe').attr('width', width * displaypercent);
    		$('#player-' + playerid + '_display').css('height', height + 'px');
    		$('#player-' + playerid + '_display > iframe').attr('height', height);

       }	
    }  
  
    if(vimeowrap('player-' + playerid) != null) {
      $( window ).load( responsiveplayer );
      $( window ).resize( responsiveplayer );
    } 

  }
}

}) (jQuery);
;
