import { App } from 'https://unpkg.com/@wazo/euc-plugins-sdk@latest/lib/esm/app.js';

const app = new App();

app.onBackgroundMessage = msg => {
  const text = `
# Message received from TAB

${JSON.stringify(msg, null, 2)}

---------

🏓 Background script will ping back the page in 5 seconds.
  `

  app.displayModal({ text });

  setTimeout(() => {
    app.sendMessageToIframe({ value: 'pong', customerId: 1234 });
  }, 5000);
}

app.initialize();
