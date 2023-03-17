var status = "";
img="";

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";

}

function preload(){
    img = loadImage('bedroom.jpg');

}

function modelLoaded(){
    console.log("Model Loaded!")
    var status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
if(error){
    console.log(error);
}
console.log(results);
}