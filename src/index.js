import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { addLocaleData, IntlProvider } from 'react-intl';
import Client from 'shopify-buy';
import store from './store';

// custom functions
import { determineSiteInfo, getFullLanguageText } from './utils';

// constants
import * as CONSTANTS from './constants';

// US / fallback / europe
import en from 'react-intl/locale-data/en';

// europe
import de from 'react-intl/locale-data/de'; // German
import fr from 'react-intl/locale-data/fr'; // French
import it from 'react-intl/locale-data/it'; // Italian
import es from 'react-intl/locale-data/es'; // Spanish

// asia
import zh from 'react-intl/locale-data/zh'; // Chinese
import hi from 'react-intl/locale-data/hi'; // Hindi
import ja from 'react-intl/locale-data/ja'; // Japanese
// import fil from 'react-intl/locale-data/fil'; // Indonesian
// import id from 'react-intl/locale-data/id'; // Indonesian
// import ko from 'react-intl/locale-data/ko'; // Korean

import { flattenMessages } from './utils';
import messages from './messages';

addLocaleData([...en, ...de, ...fr, ...it, ...es, ...zh, ...hi, ...ja]);

let locale =
  (navigator.languages && navigator.languages[0])
  || navigator.language
  || navigator.userLanguage
  || 'en'; // english as fallback if locale cannot be determined

// let locale = 'en'; // for now

let oSiteInfo = determineSiteInfo(); // determine which site to render
store.dispatch({type: 'SITE_LOCATION_FOUND', payload: oSiteInfo.sSite});

const client = Client.buildClient({
  storefrontAccessToken: 'd2dd0e283fc961e8487bc62e46f404c4',
  domain: 'siren-apparel-usa.myshopify.com'
});
store.dispatch({type: 'CLIENT_CREATED', payload: client});

// buildClient() is synchronous, so we can call all these after!
client.product.fetchAll().then((res) => {
  let products = res.filter((oProduct) => {
    console.log(oProduct.vendor);
    return oProduct.vendor === oSiteInfo.sSiteVendor || oProduct.vendor === CONSTANTS.GLOBAL_VENDOR; // only show products that can be shipped to the respective location 
  });
  store.dispatch({type: 'PRODUCTS_FOUND', payload: products});
});
client.checkout.create().then((res) => {
  store.dispatch({type: 'CHECKOUT_FOUND', payload: res});
});
client.shop.fetchInfo().then((res) => {
  store.dispatch({type: 'SHOP_FOUND', payload: res});
});

let oMessages;
if (messages[locale]) { // optimum case: full locale is found in messages object, ex: en-US, en-UK, de-DE, de-AT etc.
  oMessages = messages[locale];
}
else if (messages[locale.substring(0, 2)]) { // second-best case, the langauge by itself is found as a key "en" or "de"
  oMessages = messages[locale.substring(0, 2)]; // key found for locale of language
} else {
  oMessages = messages["en"]; // key not found; use english: "en"
}

const sFullLanguage = getFullLanguageText(locale.substring(0, 2));
store.dispatch({type: 'LANGUAGE_CHANGED', payload: {sLanguage: locale.substring(0, 2), sFullLanguage: sFullLanguage}}); // regardless of locale nonense, the first two letters are the language. we set that
  
ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale={locale} messages={flattenMessages(oMessages)}>
      <App locale={locale}/>
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
