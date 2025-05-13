# Microfrontend App

## Setup

`yarn start`

- In a new browser tab, go to `http://localhost:9000`. This is where your "root config" is running. You do not have to run the root config locally if it is already running on a deployed environment - go to the deployed environment directly.
- In the browser console, run localStorage.setItem('devtools', true);
- Refresh the page.
- A yellowish rectangle should appear at the bottom right of your screen. Click on it. Find the name of your microfrontend entrypoint and click on it. If it is not present, click on Add New Module.
- Paste the URL above into the input that appears. Refresh the page.
- Congrats, your local code is now being used!
