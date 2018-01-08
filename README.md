# Kings Of Leon Project

A responsive static front-end only website created for the band "Kings Of Leon". It was built with Angularjs, HTML, CSS & Javascript. It is the first project required in Code Institute's bootcamp course and was created for that purpose.

No template was used.

## Demo

To view the live version of this website please follow this link

## Features

As this projects purpose is to showcase front-end capabilites, I've implemented and customised several components using bootstrap, including:
1. Navbar
2. Cards
3. Carousel
4. Accordian
5. Forms
6. Alerts
7. Buttons

AngularJS was primarily used for routing, however a helpful feature I utilised was the ng-repeat directive. It was used to iterate through a collection of images, creating a gallery with only one tempate.

**Controller.js**
``` 
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
```

**Media.html**
```
<div class="tab-pane active" id="gallery-tab" role="tabpanel">
    <div class="container-fluid">
        <div class="row text-center">
            <div class="col-xs-12 col-sm-6 " ng-repeat="image in gallery track by $index">
                <div class="img-fluid">
                    <img src="{{ image }}" class="img-thumbnail" id="gallery-thumbnail-img">
                </div>
            </div>
        </div>           
    </div>
</div>
```


## Installation

1. Firstly you will need to clone this repository by running the ```git clone https://github.com/rcomiskey/kings-of-leon-project``` command
2. After you've that you'll need to make sure that you have **npm** and **bower** installed
  1. You can get **npm** by installing Node from [here](https://nodejs.org/en/)
  2. Once you've done this you'll need to run the following command:
     `npm install -g bower # this may require sudo on Mac/Linux`
3. Once **npm** and **bower** are installed, you'll need to install all of the dependencies in *package.json* and *bower.json*
  ```
  npm install
 
  bower install
  ```
4. After those dependencies have been installed you'll need to make sure that you have **http-server** installed. You can install this by running the following: ```npm install -g http-server # this also may require sudo on Mac/Linux```
5. Once **http-server** is installed run ```http-server -c-1```
6. The project will now run on [localhost](http://127.0.0.1:8080)
7. Make changes to the code and if you think it belongs in here then just submit a pull request


## Built With

- HTML5
- CSS3
- Javascript

- [AngularJS](https://angularjs.org/)
    - **AngularJS** was used to handle page routing
- [Bootstrap](http://getbootstrap.com/)
    - **Bootstrap** was used to give the project a responsive layout
- [Npm](https://www.npmjs.com/)
    - **Npm** was used to help manage some of the dependencies in our application
- [Bower](https://bower.io/)
    - **Bower** was used to manage the installation of our libraries and frameworks

