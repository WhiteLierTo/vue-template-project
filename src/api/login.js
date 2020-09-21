import service from "../utils/request";

/**
 * 登录
 */
export function Login(data) {
  return service.request({
    url: "/login/",
    method: "POST",
    data,
  });
}
