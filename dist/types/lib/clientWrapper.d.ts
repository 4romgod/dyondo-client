import { AxiosInstance } from 'axios';
import { DyondoApi } from '../openapi-client';
import { ClientConfig } from './constants';
import { CookieJar } from 'tough-cookie';
export declare const createAxiosInstance: (cookieJar?: CookieJar | undefined) => AxiosInstance;
export declare const createDyondoApiClient: (config: ClientConfig) => DyondoApi;
export declare const getInstanceOfDyondoApiClient: (config?: ClientConfig | undefined, newInstance?: boolean) => DyondoApi;
