var KOLApp = angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        var video = document.getElementById("bg-video");
        video.playbackRate = 0.6; 
        })
        
    KOLApp.controller('MediaController', function($scope) {
        $(".nav li a").on("click", function() {
        $(".nav li a").removeClass("active");   
        $(this).addClass("active");
    })

});