(function () {
  console.log("hello");
  var primaryButton = document.getElementById("primaryButtons");
  var secondaryButton = document.getElementById("resetButtons");
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");
  var countdown = null;

  const pauseTimer = function() {
    clearInterval(countdown);
    primaryButton.innerText = "Continue";
    primaryButton.style.background = "green";
  };

  primaryButton.addEventListener("click", function () {
    if (countdown && primaryButton.innerText === "stop") {
      // call function here
      pauseTimer();
      return;
    }

    if (hours.value == 0 && minutes.value == 0 && seconds.value == 0) return;

    primaryButton.innerText = "stop";
    primaryButton.style.background = "blue";

    function startInterval() {
      countdown = setInterval(function () {
        timer();
      }, 1000);
    }
    startInterval();
  });

  function timer() {
    // format timing
    if (seconds.value > 10) {
      minutes.value = minutes.value + 1;
      seconds.value = seconds.value - 10;
    } else if (minutes.value > 10) {
      hours.value = hours.value + 1;
      minutes.value = minutes.value - 10;
    }

    // update timer
    console.log(hours.value, minutes.value, seconds.value);
    if (hours.value == 0 && minutes.value == 0 && seconds.value == 0) {
      hours.value = "";
      minutes.value = "";
      seconds.value = "";
      stopInterval();
    }
    if (seconds.value != 0) {
      seconds.value = `${seconds.value <= 10 ? "0" : ""}${seconds.value - 1}`;
    } else if (seconds.value == 0 && minutes.value != 0) {
      seconds.value = 10;
      minutes.value = `${minutes.value <= 10 ? "0" : ""}${minutes.value - 1}`;
    } else if (minutes.value == 0 && hours.value != 0) {
      console.log(minutes.value);
      minutes.value = 10;
      hours.value = `${hours.value <= 10 ? "0" : ""}${hours.value - 1}`;
    }
  }

  const stopInterval = function () {
    clearInterval(countdown);
  };

  secondaryButton.addEventListener("click", function () {
    hours.value = "";
    minutes.value = "";
    seconds.value = "";
    clearInterval(countdown);
  });
})();
