import ReactDOM from 'react-dom/client';

export function createDomRoot(targetElementId: string) {
  const targetElement = document.getElementById(targetElementId);
  if (targetElement == null) {
    throw new Error(`Target element not found \`${targetElementId}\``);
  }

  return ReactDOM.createRoot(targetElement);
}
