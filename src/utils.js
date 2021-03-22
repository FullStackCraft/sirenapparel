// imports
import * as CONSTANTS from './constants';


export function flattenMessages(nestedMessages, prefix = '') {
    return Object.keys(nestedMessages).reduce((messages, key) => {
        let value       = nestedMessages[key];
        let prefixedKey = prefix ? `${prefix}.${key}` : key;

        if (typeof value === 'string') {
            messages[prefixedKey] = value;
        } else {
            Object.assign(messages, flattenMessages(value, prefixedKey));
        }
        return messages;
    }, {});
}

export function determineSiteInfo() {
  let oSiteInfo = {};
  if (window.location.href.includes("sirenapparel.us")) {
    oSiteInfo.sSite = CONSTANTS.US;
    oSiteInfo.sSiteVendor = CONSTANTS.US_VENDOR;
  } else if (window.location.href.includes("sirenapparel.eu")) {
    oSiteInfo.sSite = CONSTANTS.EU;
    oSiteInfo.sSiteVendor = CONSTANTS.EU_VENDOR;
  } else if (window.location.href.includes("sirenapparel.asia")) {
    oSiteInfo.sSite = CONSTANTS.ASIA;
    oSiteInfo.sSiteVendor = CONSTANTS.ASIA_VENDOR;
  } else { // default to US site, the good ol' original (change here to test how other sites appear)
    oSiteInfo.sSite = CONSTANTS.US;
    oSiteInfo.sSiteVendor = CONSTANTS.US_VENDOR;
  }
  return oSiteInfo;
}

export function determineUserCountry() {
  
}

export function determineCountryFlag(sIsoAlpha2Code) {
  // let sIsoAlpha3Code;
  // for (var i = 0; i < aJSON.length; i++) {
  //   if (aJSON[i].iso_alpha_2 === sIsoAlpha2Code) { // look for the entry with a matching code
  //     sIsoAlpha3Code = aJSON[i].iso_alpha_3; // flag needs three letter code
  //     return (
  //       <ReactCountryFlag code={sIsoAlpha2Code}/>
  //     );
  //   }
  // }
}

export function getFullLanguageText(sIsoAlpha2Code) {
  switch(sIsoAlpha2Code) {
    case "en":
      return "English";
    case "de":
      return "Deutsch";
    case "fr":
      return "Français";
    case "es":
      return "Español";
    default:
      return "English";
  }
}