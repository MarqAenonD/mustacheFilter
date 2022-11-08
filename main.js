noseX = 0;
noseY = 0;

function preload() {
    mustasche = loadImage("https://static.vecteezy.com/system/resources/previews/001/202/589/non_2x/mustache-png.png")
}

function setup() {
    canvas = createCanvas(450, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses)
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function modelLoaded() {
    console.log("poseNet is initialized");
}

function draw() {
    image(video, 0, 0, 450, 350);
    image(mustasche, (noseX + 25), (noseY + 5), 125, 125);
}

function take_snapshot() {
    save("filterImage.png");
}