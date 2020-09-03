var photos = ["images/6d.jpg", "images/7d.jpg", "images/8d.jpg", "images/9d.jpg", "images/10d.jpg", "images/11d.jpg", "images/12d.jpg", "images/13d.jpg", "images/14d.jpg", "images/15d.jpg", "images/16d.jpg", "images/5d.jpg", "images/4d.jpg", "images/3d.jpg"];
var imgTag = document.querySelector("img");
var count = 0;

function next(){
    count++;
    if(count>=photos.length){
        count=0;
        imgTag.src = photos[count];
    }
    else{
        imgTag.src = photos[count];
    }
}

function prev(){
    count--;
    if(count < 0 ){
        count= photos.length-1;
        imgTag.src = photos[count];
    }
    else{
        imgTag.src = photos[count];
    }
}