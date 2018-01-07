var KOLApp = angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $('.navbar-nav>li>a').on('click',function() {
        $('.navbar-collapse').collapse('hide');
        });
        
        $(".navbar-toggle").click(function(){
        $("nav").toggleClass("navbar-opened");
        });
        
        $(".navbar-nav>li>a").click(function(){
        $("nav").toggleClass("navbar-opened");
        });
        
        var video = document.getElementById("bg-video");
        video.playbackRate = 0.6; 
        $('#bg-video').on('ended',function(){
        $('#bg-video')[0].autoplay=false
        $('#bg-video')[0].load();
        });
        });
        
        
        
    KOLApp.controller('MediaController', function($scope) {    
       $scope.gallery = [
  	    "media/images/kol-gallery-1.jpg",
  	    "media/images/kol-gallery-2.jpg",
  	    "media/images/kol-gallery-3.jpg",
  	    "media/images/kol-gallery-4.jpg",
  	    "media/images/kol-gallery-5.jpg",
  	    "media/images/kol-gallery-6.jpg",
  	    "media/images/kol-gallery-7.jpg",
  	    "media/images/kol-gallery-8.jpg",
  	    "media/images/kol-gallery-9.jpg",
  	    "media/images/kol-gallery-10.jpg",
  	    "media/images/kol-gallery-11.jpg",
  	    "media/images/kol-gallery-12.jpg",
  	    "media/images/kol-gallery-13.jpg",
  	    "media/images/kol-gallery-14.jpg",
  	    "media/images/kol-gallery-15.jpg",
  	    "media/images/kol-gallery-16.jpg",
  	    
  	    
        ];
        
      
        
        
        $('.nav-tabs li a').click(function (e) {
            e.preventDefault();
            $(this).tab('show');
            $('.tab-content > .tab-pane.active').jScrollPane();
        });
    });
        
