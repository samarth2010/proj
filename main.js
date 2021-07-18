Webcam.set({
    width:290,
    height:300,
    image_format:"png",
    png_quality:100,
    constraints:{
        facingMode:"environment"
    }
});


camera= document.getElementById("camera");
Webcam.attach('#camera');

function takesnapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='ctig' src='"+data_uri+"'/>";
    });
}

console.log("ml5version",ml5.version);

classifier= ml5.imageClassifier("MobileNet",modelLoaded);

function modelLoaded()
{
   console.log("Modelloaded");
}

function check()
{
   img= document.getElementById("ctig");
   classifier.classify(img, gotResult);
}

function gotResult(error ,results)
{
  if(error){
      console.error(error)}
  else {console.log(results);
  document.getElementById("object_name").innerHTML = results[0].lable;}
}