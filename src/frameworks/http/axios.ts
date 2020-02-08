import axios from "axios";
import { IHttpClient } from "../../usecases/interfaces";
import { HttpResponse, Parameters } from "../../usecases/types";

export default function buildAxiosHttpModule() {
    return function createAxiosHttp(baseURL: string): IHttpClient {
        var _axios = axios.create({
            baseURL,
        });

        return {
            get: async function <T>(url: string, params: Parameters): Promise<HttpResponse<T>> {
                return _axios.get<T>(url, {
                    params: params
                });
            },
            post: async function <T, R = T>(url: string, body?: T | undefined): Promise<HttpResponse<R>> {
                return _axios.post<R>(url, body);
            },
        };
    }
}
