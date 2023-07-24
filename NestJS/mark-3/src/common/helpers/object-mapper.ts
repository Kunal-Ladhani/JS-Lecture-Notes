export const stringifyObject = (object) => {
  return Object.keys(object)
    .map((key) => {
      return `${key}=${encodeURIComponent(object[key])}`;
    })
    .join('&');
};
