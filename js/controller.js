angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        var video=$('#bg-video')[0];
        var videoJ =$('#bg-video');
        videoJ.on('ended',function(){
        video.src("media/images/kol-bg.jpg"); 
        
    })
});

        