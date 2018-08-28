// constants
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

export function determineLocation() {
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