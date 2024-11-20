import { App } from 'https://unpkg.com/@wazo/euc-plugins-sdk@latest/lib/esm/app.js';

const app = new App();

app.onIframeMessage = (msg) => {
  const text = `
# Message received from Background Script

${JSON.stringify(msg, null, 2)}
  `
  document.getElementById("received").innerText = text;
}

(async () => {
  await app.initialize();

  document.getElementById("send").addEventListener('click', (e) => {
    e.preventDefault();
    app.sendMessageToBackground({ value: 'ping', myData: 'abcd' });
  })
})();
