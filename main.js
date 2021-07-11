output = "";

Webcam.set({
    width: 350,
    height: 300,
    image_format : 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach ('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>'
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-xavYCcdn/model.json', modelLoaded); 

function modelLoaded() {
    console.log('Model Loaded')
}

function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("output").innerHTML = results[0].label;
        result = results[0].label;
        speak();
        if(results[0].label == "excellent")
        {
            document.getElementById("output").innerHTML = "Excellent!";
        }
        if(results[0].label == "victory")
        {
            document.getElementById("output").innerHTML = "Victory!!";
        }
        if(results[0].label == "what's up")
        {
            document.getElementById("output").innerHTML = "What's up?";
        }
        if(result[0].label == "good luck")
        {
            document.getElementById("output"),innerHTML = "Good luck!";
        }
        if(result[0].label == "beautiful")
        {
            document.getElementById("output").innerHTML = "Beautifully done";
        }
        if(result[0].label == "good job")
        {
            document.getElementById("output").innerHTML = "Good job! Keep it up";
        }
    }
}

function speak(){
    var synth = window.SpeechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_2 = "And the second prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterTHis);
}