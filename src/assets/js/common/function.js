/**
 * @description Thiết lập cookie
 * @param {String} cName tên cookie
 * @param {String} cValue giá trị cookie
 * @param {Number} exDays ra hạn cookie
 * @author NVThinh 25-1-2023
 */
function setCookie(cName, cValue, exDays) {
  const d = new Date();
  d.setTime(d.getTime() + exDays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cName + "=" + cValue + ";" + expires + ";path=/";
}

/**
 * @description Lấy thông tin cookie
 * @param {String} cName Tên cookie
 * @returns giá trị của cookie
 * @author NVThinh 25-1-2023
 */
function getCookie(cName) {
  let name = cName + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export { setCookie, getCookie };
