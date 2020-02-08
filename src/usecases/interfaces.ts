import { HttpResponse, Parameters } from "./types";

export interface IHttpClient {
    get: <T>(url: string, params: Parameters) => Promise<HttpResponse<T>>;
    post: <T, R = T>(url: string, body?: T) => Promise<HttpResponse<R>>;
}

export interface ILogger {
    error: (type: string, obj: any) => void,
    info: (type: string, obj: any) => void,
}