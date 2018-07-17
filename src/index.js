import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { addLocaleData, IntlProvider } from 'react-intl';

import en from 'react-intl/locale-data/en';
import de from 'react-intl/locale-data/de';
import fr from 'react-intl/locale-data/fr';
import it from 'react-intl/locale-data/it';
import es from 'react-intl/locale-data/es';

import { flattenMessages } from './utils';
import messages from './messages';

addLocaleData([...en, ...de, ...fr, ...it, ...es]);

let locale =
  (navigator.languages && navigator.languages[0])
  || navigator.language
  || navigator.userLanguage
  || 'en-US';
  
ReactDOM.render(
  <IntlProvider locale={locale} messages={flattenMessages(messages[locale])}>
    <App locale={locale}/>
  </IntlProvider>,
  document.getElementById('root')
);
registerServiceWorker();
