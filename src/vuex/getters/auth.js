// 获取登录状态
export function loginStatus (state) {
  return state.auth.loginStatus
}


// 获取验证手机号
export function identifyingPhone (state) {
  return state.auth.identifyingPhone
}
// 获取encoded验证码
export function encodedIdentifyingCode (state) {
  return state.auth.encodedIdentifyingCode
}
// 获取验证码
export function identifyingCode (state) {
  return state.auth.identifyingCode
}

// 有卡用户
// 获取真名
export function realName (state) {
  return state.auth.realName
}
// 获取身份证号
export function idCardCode (state) {
  return state.auth.idCardCode
}
// 获取会员卡号
export function cardNo (state) {
  return state.auth.cardNo
}

// 临时用户数据
// 临时用户数据
// 获取真名
export function realNameInterim (state) {
  return state.auth.realNameInterim
}
// 获取身份证号
export function idCardCodeInterim (state) {
  return state.auth.idCardCodeInterim
}
// 获取性别
export function sexInterim (state) {
  return state.auth.sexInterim
}
