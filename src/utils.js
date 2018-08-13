// constants
import * as CONSTANTS from './constants';

export const flattenMessages = ((nestedMessages, prefix = '') => {
  if (nestedMessages === null) {
    return {}
  }
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value       = nestedMessages[key]
    const prefixedKey = prefix ? `${prefix}.${key}` : key

    if (typeof value === 'string') {
      Object.assign(messages, { [prefixedKey]: value })
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey))
    }

    return messages
  }, {})
})

export function determineLocation() {
  let sLocation = "";
  if (window.location.href.includes("sirenapparel.us")) {
    sLocation = CONSTANTS.US;
  } else if (window.location.href.includes("sirenapparel.eu")) {
    sLocation = CONSTANTS.EU;
  } else if (window.location.href.includes("sirenapparel.asia")) {
    sLocation = CONSTANTS.ASIA;
  } else { // default to US site, the good ol' original
    sLocation = CONSTANTS.EU;
  }
  return sLocation;
}