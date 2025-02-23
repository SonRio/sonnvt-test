export function translate(key: string, locale: any, params: any = {}) {
  if (!locale) return "";
  let text = locale[key] || key;
  Object.keys(params).forEach((param) => {
    const placeholder = `{${param}}`;
    text = text.replace(placeholder, params[param]);
  });

  return text;
}
