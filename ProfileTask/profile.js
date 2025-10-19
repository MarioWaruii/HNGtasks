 function updateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString(); 
    document.getElementById("time").textContent = `current time is ${time}`;
  }

  // Update immediately and then every second
  updateTime();
  setInterval(updateTime, 1000);