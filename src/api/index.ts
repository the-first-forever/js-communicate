import { get, post, request } from './request'
import { LOGIN } from './uri'
import type { LoginType } from './types'

export const login = async (params: LoginType) => {
  const { userName, password } = params
  try {
    return await post(LOGIN, {
      userName,
      password,
    })
  } catch (e) {
    return {
      error: e,
    }
  }
}
