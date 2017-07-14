/**
 * 文字加密
 */
exports.encode = function (text) {
  return btoa(encodeURIComponent(text))
}

/**
 * 文字解密
 */
exports.decode = function (code) {
  return decodeURIComponent(atob(code))
}

/**
 * 設置 Cookie
 */
exports.setCookie = function (name, value) {
  const exp = new Date();
  exp.setTime(exp.getTime() + 15 * 60 * 1000);
  document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

/**
 * 取得 Cookie
 */
exports.getCookie = function (name) {
  const arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
  if (arr != null) return unescape(arr[2]); return null;

}

/**
 * 刪除 Cookie
 */
exports.delCookie = function (name) {
  const exp = new Date();
  exp.setTime(exp.getTime() - 1);
  const cval = getCookie(name);
  if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}