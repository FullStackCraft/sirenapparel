import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { addLocaleData, IntlProvider } from 'react-intl';

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
  || 'en-US'; // english + US as fallback if locale cannot be determined
  
console.log(locale);
  
ReactDOM.render(
  <IntlProvider locale={locale} messages={flattenMessages(messages[locale.substring(0, 2)])}>
    <App locale={locale}/>
  </IntlProvider>,
  document.getElementById('root')
);
registerServiceWorker();
