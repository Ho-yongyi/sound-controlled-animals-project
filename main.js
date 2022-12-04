function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    soundClassifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/TJ6gxYfj5/model.json')
}
function modelReady()
{
    classifier.classify()
}
function gotResults()
{
    
}