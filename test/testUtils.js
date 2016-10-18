export function isDate(obj) {
  return typeof obj.getMonth === 'function';
}
