var KOLApp = angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        var video = document.getElementById("bg-video");
        video.playbackRate = 0.6; 
        })
        
    KOLApp.controller('MediaController', function($scope) {
        $(".nav li").on("click", function() {
        $(".nav li").removeClass("active");   
        $(this).addClass("active");
    })

});