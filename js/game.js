document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
      event.preventDefault(); // Prevent the default spacebar scroll behavior
      jump();
    }
  });
  
  function jump() {
    const runner = document.getElementById('runner');
    let jumpHeight = 0;
    let jumpingUp = true;

    // Debugging statements
    console.log('Jump initiated');

    const jumpInterval = setInterval(function() {
      let runnerBottom = parseInt(window.getComputedStyle(runner).getPropertyValue('bottom'));

      if (jumpingUp) {
        runner.style.bottom = (runnerBottom + 10) + 'px';
        jumpHeight += 30;
        if (jumpHeight >= 100) { // Adjusted the threshold
          jumpingUp = false;
        }
      } else {
        runner.style.bottom = (runnerBottom - 10) + 'px';
        jumpHeight -= 10;
        if (jumpHeight <= 0) {
          clearInterval(jumpInterval);
          console.log('Jump ended');
        }
      }
    }, 20);
  }
  
  setInterval(function() {
    const runner = document.getElementById('runner');
    const obstacle = document.getElementById('obstacle');
    const runnerBottom = parseInt(window.getComputedStyle(runner).getPropertyValue('bottom'));
    const obstacleRight = parseInt(window.getComputedStyle(obstacle).getPropertyValue('right'));
  
    if (obstacleRight > 800 && obstacleRight < 850 && runnerBottom <= 50) {
      alert('Game Over!');
    }
  }, 10);
  