import { DOMParser } from '@xmldom/xmldom';

export function titleFromXml(xml) {
  const document = new DOMParser().parseFromString(xml, 'text/xml');
  return document.getElementsByTagName('title')[0]?.textContent ?? '';
}
