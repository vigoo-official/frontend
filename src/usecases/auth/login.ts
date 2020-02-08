import { createAuthModel } from "../../di/core";
import { IHttpClient } from "../interfaces";

export default function buildLoginUseCase({
    http,
}: {
    http: IHttpClient,
}) {
    return async function login(username: string, password: string) {
        try {
            var userCred = createAuthModel({
                username,
                password,
            });

            var response = await http.post('/users/login', userCred);


        } catch (e) {
            throw e;
        }
    }
}