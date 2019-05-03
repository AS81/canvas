
export function createContext() {
  const canvas = document.createElement('canvas');
  canvas.style.width = canvas.style.height = '100%';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  document.body.appendChild(canvas);

  return canvas.getContext('2d');
}
