import captureWebsite from 'capture-website';

const url = 'https://www.youtube.com/';
const options = {
  inputType: 'url',
  //waitForElement: '#pagebody',
  height: 1200,
  /*removeElements: [
    '.row.collapse'
  ],
  launchOptions: {
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ]
  }*/
};

export const takeSnapshot = () => {
  return captureWebsite.base64(url, options);
};