const CryptoJS = require('crypto-js');
const _pw = "RmFudGFJbGFyaXTDoA==";

const fbconfigDev = {
  apiKey: "AIzaSyBpNx-IjBY4uV7YIglduQjlu_VzsPoTXsk",
  authDomain: "notaforpresident.firebaseapp.com",
  projectId: "notaforpresident",
  storageBucket: "notaforpresident.appspot.com",
  messagingSenderId: "482254203223",
  appId: "1:482254203223:web:f26365785850b10f507612"
}

const firebaseConfigProd = {
  apiKey: "AIzaSyC5eUIdLmj5PUItgNNQmtJESfYzMpZ1Kag",
  authDomain: "nota4pres-prod.firebaseapp.com",
  projectId: "nota4pres-prod",
  storageBucket: "nota4pres-prod.appspot.com",
  messagingSenderId: "888933919263",
  appId: "1:888933919263:web:0bd2ba086b619183b3032a",
  measurementId: "G-QD3GQLPN9K"
}; /*prod-config*/

const firebaseConfigNotaConsule = {
  apiKey: "AIzaSyC59Hh3cmu226pOrh6KOMuQiXCZhqa1I3M",
  authDomain: "notarangeloconsule.firebaseapp.com",
  projectId: "notarangeloconsule",
  storageBucket: "notarangeloconsule.appspot.com",
  messagingSenderId: "72855183718",
  appId: "1:72855183718:web:d08fa6858c5e9b7987a8a7"
};

const firebaseConfigCalini3B = {
  apiKey: "AIzaSyBTpQvwFx98LWjrEscPTol3fIivN-LxnME",
  authDomain: "calini3b.firebaseapp.com",
  projectId: "calini3b",
  storageBucket: "calini3b.appspot.com",
  messagingSenderId: "54795117511",
  appId: "1:54795117511:web:f19616770bd2bd6eaaefe2"
};


const ancajnc = (cashjokacshkojasdchkojnadckohsniadcpjnikcadcnklòasdcknladcnklc) => {
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(cashjokacshkojasdchkojnadckohsniadcpjnikcadcnklòasdcknladcnklc));
};




export {_pw, fbconfigDev, firebaseConfigProd, firebaseConfigNotaConsule, ancajnc, firebaseConfigCalini3B}