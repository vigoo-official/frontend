import buildLoginUseCase from "../../usecases/auth/loginUseCase";
import { logger, mainHttp } from "../frameworks";

export const login = buildLoginUseCase({
    http: mainHttp,
    logger: logger,
});