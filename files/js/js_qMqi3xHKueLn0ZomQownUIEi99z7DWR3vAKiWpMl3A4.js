(function ($) {

Drupal.behaviors.RacesBehavior = {
attach: function (context, settings) {

  /****************/
  /* GENERAL      */
  /****************/

  /* Remove broken images entirely */
  $('img').error(function() {
    $(this).remove();
  });

  /* Wrap all tables in a div so we can limit width and start scroll */
  $("table").wrap('<div class="table-wrap"></div>');

  /* scroll down to fragment links, allowing for the fixed headers */
  jQuery('a[href*="#"]').live('click', function() {
       fragment = jQuery(this).attr('href').split('#')[1];
       jQuery('html,body').animate({scrollTop: jQuery('#' + fragment).offset().top - 160},'3500');
  });

  jQuery('.view-display-id-jumptoarticle select, .view-display-id-jumpmenu_manual_samepage select, .view-display-id-jumpmenu_samepage select').change(function () {
      fragment = this.value.split('#').pop();
      jQuery('html,body').animate({scrollTop: jQuery('#' + fragment).offset().top - 160}, '3500');
  });

  /* Scroll down to external link fragments */
  var hash = location.href.substring(location.href.indexOf('#'));
  setTimeout(function(){
    if(hash != location) {
      $('html,body').animate({scrollTop: jQuery(hash).offset().top - 100},'slow');
    }    
  }, 50);


  /**********************/
  /*    HEADER          */

  /* Toggle search form in mobile version */
  $("img.searchimg").toggle(function() {
       $('header form').show();
  }, function() {
       $('header form').hide();
  });

  /* Sliding behavour of top menu */
  if($( window ).width() > 960) { 
    
    jQuery("#navigation ul li.navtext a").mouseover(function() {
     jQuery('.navarea').slideDown(600);
    });
    jQuery("a#nav-hover-about").mouseover(function() {
     jQuery('.currentinnernav').hide().removeClass('currentinnernav');
     jQuery('#nav-area-about').addClass('currentinnernav').fadeIn(400);
     //jQuery(this).addClass('currentnav');
    });
    jQuery("a#nav-hover-races").mouseover(function() {
     jQuery('.currentinnernav').hide().removeClass('currentinnernav');
     jQuery('#nav-area-races').addClass('currentinnernav').fadeIn(400);
     //jQuery(this).addClass('currentnav');
    });
    jQuery("a#nav-hover-results").mouseover(function() {
     jQuery('.currentinnernav').hide().removeClass('currentinnernav');
     jQuery('#nav-area-results').addClass('currentinnernav').fadeIn(400);
     //jQuery(this).addClass('currentnav');
    });

    jQuery(".navarea").mouseleave(function() {
      jQuery(this).slideUp(600);
    });
    jQuery("body").mouseleave(function() {
      jQuery(".navarea").slideUp(600);
    });
    jQuery("#navigation ul li.navimage").mouseover(function() {
      jQuery(".navarea").slideUp(600);
    }); 
  }   

  /* Shrink header on page scroll */ 
  $('#header').data('size','big');

  $(window).scroll(function(){

    if($( window ).width() > 960) {  
      if($(document).scrollTop() > 60)
      {
        $('.view-results-single-event.view-display-id-page .view-header').css('margin-top' , '110px');
      } else {
        $('.view-results-single-event.view-display-id-page .view-header').css('margin-top' , '0');
      }  
    } else if($( window ).width() > 768) { 
      if($(document).scrollTop() > 60) {
        $('.view-results-single-event.view-display-id-page .view-header').css('margin-top' , '30px');
      } else {
        $('.view-results-single-event.view-display-id-page .view-header').css('margin-top' , '0');
      }
    }  

    if($( window ).width() > 768) {  
      if($(document).scrollTop() > 60)
      {
        if($('#header').data('size') == 'big')
        {
            $('#header').data('size','small');
            $('#header').stop().animate({height:'46px'},600);
            $('#header').addClass('header-small');
            $('.navarea').css('top', '46px');
            $('.domain-admin-menu .navarea').css('top', '71px');
            $('.domain-admin-menu-combined .navarea').css('top', '96px');
            $('.tab-toolbar .navarea').css('top', '86px');
            $('.tab-toolbar.domain-admin-menu .navarea').css('top', '111px');
            $('.tab-toolbar.domain-admin-menu-combined .navarea').css('top', '131px');

            $(".term-page #page-sidebar").css('margin-top', '60px');
            $('.domain-admin-menu .term-page #page-sidebar').css('margin-top', '110px');
            $('.domain-admin-menu-combined .term-page #page-sidebar').css('margin-top', '140px');
        }
      } else {
        if($('#header').data('size') == 'small')
        {
          $('#header').data('size','big');
          $('#header').stop().animate({ height:'103px'},600);
          $('#header').removeClass('header-small');
          $('.navarea').css('top', '98px');
          $('.domain-admin-menu .navarea').css('top', '123px');
          $('.domain-admin-menu-combined .navarea').css('top', '148px');
          $('.tab-toolbar .navarea').css('top', '133px');
          $('.tab-toolbar.domain-admin-menu .navarea').css('top', '163px');
          $('.tab-toolbar.domain-admin-menu-combined .navarea').css('top', '183px'); 

          $(".term-page #page-sidebar").css('margin-top', '0'); 
          $(".node-type-book .term-page #page-sidebar").css('margin-top', '0'); 
          $('.domain-admin-menu .term-page #page-sidebar').css('margin-top', '0');
          $('.domain-admin-menu-combined .term-page #page-sidebar').css('margin-top', '0');        
        }  
      }   
    } 

    if($( window ).width() < 650) {

      if($(document).scrollTop() > 10)
      {
        $('#banner').slideUp('1000');
        $('#result-header').css('top', '40px'); 
        $('.view-results-single-event.view-display-id-page .view-header').css('padding-top' , '10px');
        $('.view-results-single-event.view-display-id-page .view-header .total-results').hide();

        $(".term-page #page-sidebar").css('margin-top', '40px');

      } else {
        $('#banner').slideDown('1000');
        $('#result-header').css('top', '82px'); 
        $('.view-results-single-event.view-display-id-page .view-header').css('padding-top' , '20px');
        $('.view-results-single-event.view-display-id-page .view-header .total-results').show();

        $(".term-page #page-sidebar").css('margin-top', '-30px'); 
        $(".node-type-book .term-page #page-sidebar").css('margin-top', '1px'); 
      }

    } else {
      if($(document).scrollTop() > 230) {
         $('#result-header').css('padding-top', '70px'); 
         $('.domain-www-srichinmoyracesorg #result-header').css('padding-top', '120px');        
      } else {
         $('#result-header').css('padding-top', '30px'); 
         $('.domain-www-srichinmoyracesorg #result-header').css('padding-top', '30px');
      }

    }  
  }); 

  /*************************/
  /*  RESULTS LISTING      */

  /* Change results list to a select in mobile */  
  if($( window ).width() < 650) { 
    $('#result-header').css('width', $( window ).width() * 0.92 + 'px');

    $('#result-header .view-content').each(function() {
        var $select = $('<select />');

        var currentyear = window.location.pathname.split('/').pop();

        $(this).find('a').each(function() {
            var $option = $('<option />');
            $option.attr('value', $(this).attr('href')).html($(this).html());
            if(!isNaN(currentyear) && parseInt(Number(currentyear)) == currentyear && currentyear == $(this).text()) {
              $option.attr('selected', 'selected');
            }
            $select.append($option);
        });

        $(this).replaceWith($select);
    });

    $('#result-header select').bind('change', function () {
          var url = $(this).val(); // get selected value
          if (url) { // require a URL
              window.location = url; // redirect
          }
          return false;
      });

  }

  /* Workaround - hide empty gallery link box */
  $('.result-link-section').hide();
  $('.result-link-section').has('strong').show();
  
  /* Clicking on pdf link reveals opened files */
  $(".single-results-open").toggle(function() {
       $(this).parents('.single-result').children('.single-result-opened-files').slideDown(300);
   }, function() {
       $(this).parents('.single-result').children('.single-result-opened-files').slideUp(300);
  });

  /**********************/
  /* EVENTS  LISTING    */

  $('#event-view > .view').hide();
  $("#event-view > .view").each(function() {
       $(this).has('img').addClass('view-with-content').show();
   });
  $("#event-view > .view:empty").hide();

  /* Add odd/even striping classes to views on /events page */
  /*$('#event-view > .view').hide();
  $('#event-view > .view').hasClass('view-with-content').show(); */
  $('#event-view > .view-with-content:nth-child(2n)').addClass('event-view-even');
  $('#event-view > .view-with-content:nth-child(2n + 1)').addClass('event-view-odd');
  $('#event-view > .view-with-content .views-row:nth-child(3n)').addClass('views-row-3n');

  /* Generate listing from available event views */
  var listingoutput = '<div id="event-view-listing-title" class="clearfix">' + Drupal.t('On this page') + ':</div><ul id="event-view-listing">';
  var listcount = 0;
  $('#event-view > .view h2').each(function() {
     listingoutput += '<li><a href="#' + $(this).attr('id') + '">' + $(this).text() + '</a></li>';
     listcount++;
  });
  listingoutput += '</ul>';
  if(listcount > 1) {
    $('#event-view-header h1').after(listingoutput);
  }  

  /***********************/
  /*  SINGLE EVENT PAGE  */
  /***********************/

  /* In event box, make title text smaller if title is too long */
  if(jQuery("#event-first-section-box h1").text().length > 40) {  
    jQuery("#event-first-section-box h1").css('font-size', '2.2em');
  }

  /* In event pages - links to images load in lightbox */
  $("#event-third-section-raceinfo a, #event-second-section-about a").each(function(i, el) {
    var href = $(this).attr('href');
    if (/\.(jpeg|jpg|png|gif)$/.test(href)) {
      $(this).removeAttr('target').attr('rel', 'shadowbox');
    } 
  });

  /* Add feather to the results listing within events page */
  $(".view-display-id-eventlisting").attr('id', 'event-results-section');
  $(".view-display-id-eventlisting .view-content").append('<div class="content-feather"></div>');  

  /* Manage individual race listing below banner for multiple and series races on event page*/
  $('.col-last > .previous-event').parents('.view-grid-table-row').addClass('previous-hidden-row').hide();
  $('.view-grid-table-row').not('.previous-hidden-row').addClass('future-row');
  if ( $("#event-second-section-seriessummary .row-1 .col-last > div").hasClass("previous-event") ) {
    $("#event-second-section-seriessummary-header").after('<span class="view-previous">View previous race dates »</span>');
  }  
  $(".view-previous").click(function() {
     $('.previous-hidden-row').show();
     $(".view-previous").hide();
  }); 
  $('.future-row:gt(3)').addClass('future-hidden-row').hide();
  if ( $("#event-second-section-seriessummary .view-grid-table > div:last-child").hasClass("future-hidden-row") ) {
     $('.view-grid-table').after('<span class="view-future">More upcoming races »</span>');
  }  
  $(".view-future").click(function() {
     $('.future-hidden-row').show();
     $(".view-future").hide();
  }); 

  $('.series-full-event-previous').addClass('series-full-previous-hidden-row').hide();
  if ( $("#event-series-section .field-collection-container > div:first-child").hasClass("series-full-previous-hidden-row") ) {
    $("#event-series-section h2").after('<span class="series-full-view-previous">View all previous races »</span>');
  }  
  $(".series-full-view-previous").click(function() {
     $('.series-full-previous-hidden-row').show();
     $(".series-full-view-previous").hide();
  }); 

  /* Display event details as tabs or accordion, depending on event setting and screen width */
  tabbedContent = function(rand, setting){
  if($(window).width() <= 480 || setting == 2){

        $('#tabs-' + rand).each(function(){
        var a = $('<div id="accordion-' + rand + '">');
        var b = new Array();
        $(this).find('>ul>li').each(function(){
            b.push('<h3>'+$(this).html()+'</h3>');
        });
        var c = new Array();
        $(this).find('>div').each(function(){
          c.push('<div>'+$(this).html()+'</div>');
        });
        for(var i = 0; i < b.length; i++){
          a.append(b[i]).append(c[i]);
        }
        $(this).before(a);
        $(this).remove();
      });
      $('#accordion-' + rand).accordion({collapsible: true, active: 'none', autoHeight: false, navigation: true});

    } else {
      $("#tabs-" + rand).tabs();
    }
  };  


  /**********************/
  /* ARTICLES AND TERMS */
  /**********************/

  sidewidth = Math.min($(window).width() * 0.3, 410);
  jQuery("#term-description > p:last").addClass('term-lastpara');
  jQuery(".term-page #page-sidebar").css('min-width', sidewidth + 'px' );

  var searchBoxDefault = Drupal.t('Search this section');
  var hsearch = ".view-display-id-sidebar_search input.form-text";
  jQuery(hsearch).attr("value", searchBoxDefault).blur();
  jQuery(hsearch).focus(function(){
    if(jQuery(this).attr("value") == searchBoxDefault) jQuery(this).attr("value", "");
  });
  jQuery(hsearch).blur(function(){
    if(jQuery(this).attr("value") == "") {
      jQuery(this).attr("value", searchBoxDefault);
    }
  });

  /* Clicking on author link reveals bio */
  jQuery('.author-link').click(function() {
       jQuery(this).parents('.page-header').siblings('.author-profile').slideDown('1300').css('display', 'block');
       jQuery(this).hide();
  });  

  /* For article teasers - click to expand */
  $('body').delegate('.teaser-ending-more > .button', 'click', function(){

      var el = $(this).parents('.teaser-ending').siblings('.initial-teaser').eq(0);
      curHeight = el.height();
      autoHeight = el.css('height', 'auto').height(); //temporarily change to auto and get the height.
      el.height(curHeight).animate({ height: autoHeight }, 1200, function() {
           el.css('height', 'auto'); 
      });
      $(this).parents('.teaser-ending').hide();
      $(this).parents('.teaser-ending').siblings('.initial-teaser').find('.slider').delay(1200).fadeIn(2000).find('.flex-direction-nav').fadeIn(800).siblings('.flex-control-nav').fadeIn(800);
  });

  /* In mobile - hide article search initially with button to expand */
  jQuery(".mobile-expand-link").toggle(function() {
       jQuery(this).parent("#term-image-and-title").find("img").slideDown(700);
       jQuery(this).parent("#term-image-and-title").siblings("#term-description").slideDown(700).siblings("a").show();
       jQuery(this).parent("#term-image-and-title").siblings(".view").slideDown(700);
       jQuery(this).css("color", "red").text(Drupal.t('close') + " »");
       jQuery(this).parents("#term-information").addClass("expanded");      
    }, function() {
       jQuery(this).parent("#term-image-and-title").find("img").slideUp(700);
       jQuery(this).parent("#term-image-and-title").siblings("#term-description").slideUp(700).siblings("a").hide();
       jQuery(this).parent("#term-image-and-title").siblings(".view").slideUp(700);
       jQuery(this).css("color", "#eee").text(Drupal.t('find more articles') + " »");
       jQuery(this).parents("#term-information").removeClass("expanded");
  });

  /******************************/
  /* EQUAL HEIGHT FUNCTIONS     */
    
  set4ColHeights =function() {    
    theight = Math.max($(this).height(), $(this).prev().height(), $(this).prev().prev().height(), $(this).prev().prev().prev().height());
    $(this).children('div').css('min-height', theight + 'px');
    $(this).prev().children('div').css('min-height', theight + 'px');
    $(this).prev().prev().children('div').css('min-height', theight + 'px');  
    $(this).prev().prev().prev().children('div').css('min-height', theight + 'px'); 
  };  

  set3ColHeights =function() {    
    theight = Math.max($(this).height(), $(this).prev().height(), $(this).prev().prev().height());
    $(this).css('min-height', (theight + 2) + 'px');
    $(this).prev().css('min-height', (theight + 1) + 'px');
    $(this).prev().prev().css('min-height', theight + 'px');  
  };  

  set2ColHeights =function() {    
    theight = Math.max($(this).height(), $(this).prev().height() );
    $(this).css('min-height', theight + 'px');
    $(this).prev().css('min-height', theight + 'px');
  };    

  set2ColChildHeights =function() {  
    theight = Math.max($(this).height(), $(this).prev().height() );
    $(this).children('div').css('min-height', theight + 'px');
    $(this).prev().children('div').css('min-height', theight + 'px');
  };  
    
  setHeights = function() {
    $('#event-view .views-row').css('min-height', '0px'); 
    $('#event-fourth-section-about a').css('min-height', '0px');
    $('.view-display-id-block_table_twowide .views-row').css('min-height', '0px');
    $('.view-display-id-block_table_fourwide .views-row > div').css('min-height', '0px');

    $('.event-view-even .views-row-even').each(set2ColHeights);       
    if ( $( window ).width() >= 768 ) {    
      $('.event-view-odd .views-row-3n').each(set3ColHeights);
      $('#event-fourth-section-about a.even').each(set2ColHeights);
    } else {
      $('.event-view-odd .views-row-even').each(set2ColHeights);
    } 
    if ( $( window ).width() >= 960 ) {
      $('.view-display-id-block_table_fourwide .views-row-4').each(set4ColHeights);
    }      
    if ( $( window ).width() < 960 && $( window ).width() >= 480 ) {
      $('.view-display-id-block_table_fourwide .views-row-even').each(set2ColChildHeights);
    } 
    if ( $( window ).width() > 650 ) {
      $('#event-fourth-section-about a.even').each(set2ColHeights);
    }         
    if ( $( window ).width() >= 768 ) {
      $('.view-display-id-block_table_twowide .views-row-even').each(set2ColHeights);
    }
  };  
  setHeights();
  $( window ).resize( setHeights ); 

}}; 

})(jQuery);

 

;
