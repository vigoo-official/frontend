import buildAxiosHttpModule from "../../frameworks/http/axios";

export const createAxiosHttp = buildAxiosHttpModule();
export const mainHttp = createAxiosHttp('http://localhost:8080/api');