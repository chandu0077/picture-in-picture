const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt the user to select a MediaStream, pass to video element, then play

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Catch the errors
    console.log("whoops! error here:", error);
  }
}
button.addEventListener("click", async () => {
  // Disable the button
  button.disabled = true;
  // Start picture in picture
  await videoElement.requestPictureInPicture();
  //   Reset the Button
  button.disabled = false;
});
// On Load
selectMediaStream();
