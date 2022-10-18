const yay = () =>
  confetti.create(document.getElementById('canvas'), {
    resize: true,
    useWorker: true,
  })({ particleCount: 200, spread: 200 });


yay();