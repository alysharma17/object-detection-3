object=[];
img="";
status="";
function preload() {
img=loadImage("flowers.jpg");
}

function setup() {
canvas=createCanvas(600, 600);
canvas.center();
coco_ssd=ml5.objectDetector("cocossd", model_loaded);
document.getElementById("status").innerHTML="Detecting Objects";
}

function model_loaded() {
    console.log("model loaded!");
    status=true;
    coco_ssd.detect(img, getResults);
}
function draw() {
image(img, 0, 0, 600, 600);
if (status != "") {
    for (i=0; i<object.length; i++) {
    document.getElementById("status").innerHTML="Object Detected!";
    fill('red');
    confidence=object[i].confidence*100;
    percent=floor(confidence);
    textSize(30);
    text(object[i].label+" "+percent+"%", object[i].x, object[i].y);
    strokeWeight(5);
    noFill();
    stroke("red");
    rect(object[i].x, object[i].y, object[i].width, object[i].height);
    }
}

}

function getResults(error, results){
if (error) {
    console.error(error);
}
console.log(results);
object=results;

}

function back() {
    window.location="index.html"; 
}