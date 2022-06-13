import http from "../http-oauth";
class OauthService {
    login(data,clientId,scope,redirectUrl) {
        return http.post(`/login?clientId=${clientId}&scope=${scope}&redirectUrl=${redirectUrl}`,data,{headers: {'Content-Type': 'application/json'}});
    }


    checkAuthorizationCode(authCode,redirectUrl,client_id) {
        return http.post(`/auth?authCode=${authCode}&redirectUrl=${redirectUrl}&client_id=${client_id}`,{headers: {'Content-Type': 'application/json'}});
    }

}
export default new OauthService();