
//  DIVYANI - 895317

  const paintingCanvas = document.getElementById('paintingCanvas');
  const context = paintingCanvas.getContext('2d');
  let isDrawing = false;
  let color = 'blue'; // default color
  let brushSize = 10; // default size

 document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('brushSizing').value = brushSize;
 });

  function setColor(newColor) {
      color = newColor;
  }

  function enableEraser() {
      color = 'white';
  }

  function clearCanvas() {
      context.clearRect(0, 0, paintingCanvas.width, paintingCanvas.height);
  }

  paintingCanvas.addEventListener('mousedown', () => isDrawing = true);
  paintingCanvas.addEventListener('mouseup', () => {
      isDrawing = false;
      context.beginPath(); // Reset the path
  });
  paintingCanvas.addEventListener('mousemove', () => {
    if (!isDrawing) return;

        context.lineWidth = brushSize;
        context.lineCap = 'round';
        context.strokeStyle = color;

        context.lineTo(event.clientX - paintingCanvas.offsetLeft, event.clientY - paintingCanvas.offsetTop);
        context.stroke();
        context.beginPath();
        context.moveTo(event.clientX - paintingCanvas.offsetLeft, event.clientY - paintingCanvas.offsetTop);
  });

  document.getElementById('brushSizing').addEventListener('input', (event) => {
      brushSize = event.target.value;
  });