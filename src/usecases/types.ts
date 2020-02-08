export type HttpResponse<T = object> = {
    data: T,
    status: number,
    headers: object,
    config: object,
    request?: object,
}

export type Parameters = {
    [key: string]: string
}