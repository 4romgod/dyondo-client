import {CookieJar} from 'tough-cookie';

export const NUMBER_OF_RETRIES = 3;
export interface ClientConfig {
    endpoint: string
    cookieJar?: CookieJar
}
