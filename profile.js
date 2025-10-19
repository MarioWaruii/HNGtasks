
  const start = Date.now();

  function updateTime() {
    const elapsed = Date.now() - start; // total milliseconds since page load
    document.getElementById("time").textContent = elapsed.toLocaleString() + " ms";
  }

  setInterval(updateTime, 1); // updates every millisecond