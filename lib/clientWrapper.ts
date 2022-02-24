import axios, {AxiosInstance} from 'axios';
import axiosRetry from 'axios-retry';
import {DyondoApi} from '../openapi-client';
import {ClientConfig, NUMBER_OF_RETRIES} from './constants';
import {CookieJar} from 'tough-cookie';
import {HttpCookieAgent, HttpsCookieAgent} from 'http-cookie-agent';

let client: DyondoApi ;
let clientConfig: ClientConfig;

export const createAxiosInstance = (cookieJar?: CookieJar): AxiosInstance => {
    const axiosInstance = axios.create({
        withCredentials: true,
        ...(cookieJar && {
            httpAgent: new HttpCookieAgent({jar: cookieJar}),
            httpsAgent: new HttpsCookieAgent({jar: cookieJar}),
        }),
    });

    axiosRetry(axiosInstance, {
        retries: NUMBER_OF_RETRIES,
        retryDelay: axiosRetry.exponentialDelay,
    });

    return axiosInstance;
};

export const createDyondoApiClient = (config: ClientConfig): DyondoApi => {
    const axiosInstance = createAxiosInstance(config.cookieJar);
    return new DyondoApi(undefined, config.endpoint, axiosInstance);
};

export const getInstanceOfDyondoApiClient = (config?: ClientConfig, newInstance = false): DyondoApi => {
    if (!client || newInstance) {
        if (config) {
            clientConfig = config;
            client = createDyondoApiClient(config);
            return client;
        }
        throw Error('No DyondoApi ClientConfig Specified.');
    }
    return client;
};
