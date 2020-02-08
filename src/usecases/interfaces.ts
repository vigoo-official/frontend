import { HttpResponse, Parameters } from "./types";

export interface IHttpClient {
    get: <T>(url: string, params: Parameters) => Promise<HttpResponse<T>>;
    post: <T, R = T>(url: string, body?: T) => Promise<HttpResponse<R>>;

}
