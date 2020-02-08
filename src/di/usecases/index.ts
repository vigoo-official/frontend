import buildLoginUseCase from "../../usecases/auth/login";
import { mainHttp } from "../frameworks";

export const login = buildLoginUseCase({
    http: mainHttp,
});