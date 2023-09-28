const slidingDiv = document.getElementById('sliding-div');
let topPosition = -100; // Start the div above the viewport
const animationDuration = 2000; // 2 seconds

const slideDown = () => {
  // Increment the top position by 1px every 10ms
  topPosition += 1;
  slidingDiv.style.top = topPosition + 'px';
  
  // Stop the animation when the div reaches its final position
  if (topPosition < (window.innerHeight - slidingDiv.offsetHeight) / 2) {
    setTimeout(slideDown, 10);
  }
}

setTimeout(slideDown, animationDuration);
