import { createAuthModel } from "../../core";
import { IHttpClient } from "../interfaces";

export default function createLoginUseCase({
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
        } catch (e) {

        }
    }
}