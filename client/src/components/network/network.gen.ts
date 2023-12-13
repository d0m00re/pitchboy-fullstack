export type THttpMethod = "get" | "post" | "patch" | "delete" | "put";

export interface IEncodeObj {
    method: THttpMethod,
    body?: any;
    headers?: any;
}

/**
 * return promise or throw new Error inside catch
 * @param url 
 * @param method 
 * @param body 
 * @returns 
 */
const networkGen = (url: string, method: THttpMethod, body?: any) => {
    let encodeObj: IEncodeObj = { method: method }

    if (body) encodeObj.body = JSON.stringify(body);
    encodeObj.headers = { "Content-Type": "application/json" };
    // 'Content-Type': 'application/x-www-form-urlencoded',

    return fetch(url, encodeObj)
        .then(resp => {
            return resp.json();
        })
        .catch(() => {
            throw new Error("invalid")
        });
}

export default networkGen;