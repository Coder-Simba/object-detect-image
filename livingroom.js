img="";
status = "";
objects=[];

function preload(){
    img=loadImage('livingroom.jpg');
}

function setup(){
    canvas=createCanvas(640, 420);
    canvas.position(300, 130);
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!")
    status=true;
    objectDetector.detect(img, gotResult);
}

function draw(){
    image(img, 0, 0, 640, 420);

    if(status !=""){
       for(i=0; i< objects.length; i++){
        document.getElementById("status").innerHTML="Status : Object Detected";
        fill("#e9d1ab");
        percent = floor(objects[i].confidence*100);
        text(objects[i].label+""+percent+"%",objects[i].x, objects[i].y);
        noFill();
        stroke("#e9d1ab");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
       }
    
    
    
}
}


function gotResult(error, results){
    if(error){
        console.log(error);

    }
    console.log(results);
    objects=results;
}
function back(){
    window.location="index.html";
}