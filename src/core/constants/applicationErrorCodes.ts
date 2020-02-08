import { IApplicationErrorsCodes } from "../interfaces";

export class ApplicationErrorCodes implements IApplicationErrorsCodes {
    get STRING_IS_REQUIRED(): number { return 1; }
    get STRING_GTE_6(): number { return 2; }
}