import ProgressBar from "progress";

const bar = new ProgressBar("Downloading [:bar] :rate/Mbps :percent :etam", {
  total: 40,
});

const timer = setInterval(() => {
  bar.tick();
  if (bar.complete) {
    clearInterval(timer);
  }
}, 100);
