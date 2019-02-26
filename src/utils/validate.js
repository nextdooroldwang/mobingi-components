/**
 * Created by jiachenpan on 16/11/18.
 */

// 特定用户名验证
// export function isvalidUsername(str) {
//   const valid_map = ['admin', 'editor']
//   return valid_map.indexOf(str.trim()) >= 0
// }

export function isvalidUsername(str) {
  return str.length > 0
}

export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
