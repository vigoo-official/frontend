import buildAxiosHttpModule from "../../frameworks/http/axios";
import buildErrorLogger from "../../frameworks/logger/error";
import buildInfoLogger from "../../frameworks/logger/info";
import { ILogger } from "../../usecases/interfaces";

// HTTP MODULE

export const createAxiosHttp = buildAxiosHttpModule();
export const mainHttp = createAxiosHttp('http://localhost:8080/api');

// END HTTP MODULE


// LOGGER

export const logger: ILogger = Object.freeze({
    error: buildErrorLogger(),
    info: buildInfoLogger(),
})

// END LOGGER