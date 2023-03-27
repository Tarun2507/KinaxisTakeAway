import axios from 'axios';
enum HTTP_STATUS_CODES {
    UNAUTHORIZED = 401,
    OK = 200,
    INTERNAL_SERVER_ERROR = 500,
}
const APP_NAME = "BirthdayApp";
const baseWikiUrl = `https://api.wikimedia.org/feed/v1/wikipedia/en`
const APP_EMAIL = "treddy80@gmail.com";
const APP_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2OGMxNWZkNDNlZGY0OTJjNzdhNmE1MzZiYWI2ZTAyMSIsImp0aSI6IjY3YzAwOGQyMDg5YmMwYzllMjJlMzEyYzlkZmIyNjFkMTg5ZjA3NTAyZjdkZTYxYTgyYTUwNWI1NTA5NWIxMzc1MTU0YTczMjYzMTFlZjgwIiwiaWF0IjoxNjc5NjgxMzc1LjY5OTk5OCwibmJmIjoxNjc5NjgxMzc1LjcwMDAwMSwiZXhwIjozMzIzNjU5MDE3NS42OTc5NzUsInN1YiI6IjcyMzY0NTEwIiwiaXNzIjoiaHR0cHM6Ly9tZXRhLndpa2ltZWRpYS5vcmciLCJyYXRlbGltaXQiOnsicmVxdWVzdHNfcGVyX3VuaXQiOjUwMDAsInVuaXQiOiJIT1VSIn0sInNjb3BlcyI6WyJiYXNpYyJdfQ.VPExDdiGMQayj7PNM_q8o_Y7sQuWKYt7gUHqz-Ow7x9dq-SL5kG11B23rnk99x1PTqhH7VZ2Y4TZDvmRI6l-pduXBmX_1UizsSNx1VuAPrVpvvgiGbP7xVvS7mEotPCwQiQidjlidTU4KyVsGo7HrJ7qO7HQNZ7W6raMYAeBd04zQTOLNji8O2BBczk2jFB_YLh2GIW92SJE8i7rpGVFqwmqF2mm0g1aznyLqztgRkPY42pJs7CHGXFL8J66tj0BOEU1FzxOPXFzjR8AjK_mxNLw9ftcQDBP6RwmfQ2932n6WCI6nZoplwm9yYu-0yAHMCHxeeRMJ1U14fIFbOet3TDhRSdseevWQVykF7qgb7ivcWiKPGwA5uxsw2POjrHgaNo2LxcY-cpS__FST-9aY12bRiFtxMY0buSsaS55As0aQ6_5TsO4x0421XNKvWqzWpiZJxaQEhG-CWKcXUBUACBzNJbQMl48lx0WtNLhWFrGxFgqBW875XVyuzIBh11_UHPMZ1d3M2xnExZzAfF6j8yyBxbF-leQw_waFXpdGBi75LW7ez6ORwOYUKpmbbOGizpbz4vM2zflZQ2GQ7XxDpF8UXOdYqj1N1VohgHl6glvjSoxq99CimyOCqIyVn40wfPrNaTr2dSshxs4CWAMPlKH8TWTHv6z3Lmau9savdg"
export const axiosInstance = axios.create({
    baseURL: baseWikiUrl,
});

axiosInstance.interceptors.request.use((config) => {
    config.headers["Authorization"] = "bearer" + APP_TOKEN
   config.headers["Api-User-Agent"] = APP_NAME + APP_EMAIL;
    return config;
});
axiosInstance.interceptors.response.use((response) => {
    switch(response.status) {
        case HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR :
            throw new Error("Internal server error");
        case HTTP_STATUS_CODES.OK :
            return response;
        case HTTP_STATUS_CODES.UNAUTHORIZED :
            throw new Error("Unauthorized");
        default :
        throw new Error("Unauthorized"); 
    }
  }, error => {
    // handle the response error
    return Promise.reject(error);
  });
export default axiosInstance;