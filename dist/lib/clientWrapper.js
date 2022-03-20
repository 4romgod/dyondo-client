"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInstanceOfDyondoApiClient = exports.createDyondoApiClient = exports.createAxiosInstance = void 0;
const axios_1 = __importDefault(require("axios"));
const axios_retry_1 = __importDefault(require("axios-retry"));
const openapi_client_1 = require("../openapi-client");
const constants_1 = require("./constants");
const http_cookie_agent_1 = require("http-cookie-agent");
let client;
let clientConfig;
const createAxiosInstance = (cookieJar) => {
    const axiosInstance = axios_1.default.create({
        withCredentials: true,
        ...(cookieJar && {
            httpAgent: new http_cookie_agent_1.HttpCookieAgent({ jar: cookieJar }),
            httpsAgent: new http_cookie_agent_1.HttpsCookieAgent({ jar: cookieJar }),
        }),
    });
    (0, axios_retry_1.default)(axiosInstance, {
        retries: constants_1.NUMBER_OF_RETRIES,
        retryDelay: axios_retry_1.default.exponentialDelay,
    });
    return axiosInstance;
};
exports.createAxiosInstance = createAxiosInstance;
const createDyondoApiClient = (config) => {
    const axiosInstance = (0, exports.createAxiosInstance)(config.cookieJar);
    return new openapi_client_1.DyondoApi(undefined, config.endpoint, axiosInstance);
};
exports.createDyondoApiClient = createDyondoApiClient;
const getInstanceOfDyondoApiClient = (config, newInstance = false) => {
    if (!client || newInstance) {
        if (config) {
            clientConfig = config;
            client = (0, exports.createDyondoApiClient)(config);
            return client;
        }
        throw Error('No DyondoApi ClientConfig Specified.');
    }
    return client;
};
exports.getInstanceOfDyondoApiClient = getInstanceOfDyondoApiClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50V3JhcHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jbGllbnRXcmFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGtEQUEyQztBQUMzQyw4REFBcUM7QUFDckMsc0RBQTRDO0FBQzVDLDJDQUE0RDtBQUU1RCx5REFBb0U7QUFFcEUsSUFBSSxNQUFpQixDQUFFO0FBQ3ZCLElBQUksWUFBMEIsQ0FBQztBQUV4QixNQUFNLG1CQUFtQixHQUFHLENBQUMsU0FBcUIsRUFBaUIsRUFBRTtJQUN4RSxNQUFNLGFBQWEsR0FBRyxlQUFLLENBQUMsTUFBTSxDQUFDO1FBQy9CLGVBQWUsRUFBRSxJQUFJO1FBQ3JCLEdBQUcsQ0FBQyxTQUFTLElBQUk7WUFDYixTQUFTLEVBQUUsSUFBSSxtQ0FBZSxDQUFDLEVBQUMsR0FBRyxFQUFFLFNBQVMsRUFBQyxDQUFDO1lBQ2hELFVBQVUsRUFBRSxJQUFJLG9DQUFnQixDQUFDLEVBQUMsR0FBRyxFQUFFLFNBQVMsRUFBQyxDQUFDO1NBQ3JELENBQUM7S0FDTCxDQUFDLENBQUM7SUFFSCxJQUFBLHFCQUFVLEVBQUMsYUFBYSxFQUFFO1FBQ3RCLE9BQU8sRUFBRSw2QkFBaUI7UUFDMUIsVUFBVSxFQUFFLHFCQUFVLENBQUMsZ0JBQWdCO0tBQzFDLENBQUMsQ0FBQztJQUVILE9BQU8sYUFBYSxDQUFDO0FBQ3pCLENBQUMsQ0FBQztBQWZXLFFBQUEsbUJBQW1CLHVCQWU5QjtBQUVLLE1BQU0scUJBQXFCLEdBQUcsQ0FBQyxNQUFvQixFQUFhLEVBQUU7SUFDckUsTUFBTSxhQUFhLEdBQUcsSUFBQSwyQkFBbUIsRUFBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUQsT0FBTyxJQUFJLDBCQUFTLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDcEUsQ0FBQyxDQUFDO0FBSFcsUUFBQSxxQkFBcUIseUJBR2hDO0FBRUssTUFBTSw0QkFBNEIsR0FBRyxDQUFDLE1BQXFCLEVBQUUsV0FBVyxHQUFHLEtBQUssRUFBYSxFQUFFO0lBQ2xHLElBQUksQ0FBQyxNQUFNLElBQUksV0FBVyxFQUFFO1FBQ3hCLElBQUksTUFBTSxFQUFFO1lBQ1IsWUFBWSxHQUFHLE1BQU0sQ0FBQztZQUN0QixNQUFNLEdBQUcsSUFBQSw2QkFBcUIsRUFBQyxNQUFNLENBQUMsQ0FBQztZQUN2QyxPQUFPLE1BQU0sQ0FBQztTQUNqQjtRQUNELE1BQU0sS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7S0FDdkQ7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDLENBQUM7QUFWVyxRQUFBLDRCQUE0QixnQ0FVdkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MsIHtBeGlvc0luc3RhbmNlfSBmcm9tICdheGlvcyc7XG5pbXBvcnQgYXhpb3NSZXRyeSBmcm9tICdheGlvcy1yZXRyeSc7XG5pbXBvcnQge0R5b25kb0FwaX0gZnJvbSAnLi4vb3BlbmFwaS1jbGllbnQnO1xuaW1wb3J0IHtDbGllbnRDb25maWcsIE5VTUJFUl9PRl9SRVRSSUVTfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQge0Nvb2tpZUphcn0gZnJvbSAndG91Z2gtY29va2llJztcbmltcG9ydCB7SHR0cENvb2tpZUFnZW50LCBIdHRwc0Nvb2tpZUFnZW50fSBmcm9tICdodHRwLWNvb2tpZS1hZ2VudCc7XG5cbmxldCBjbGllbnQ6IER5b25kb0FwaSA7XG5sZXQgY2xpZW50Q29uZmlnOiBDbGllbnRDb25maWc7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVBeGlvc0luc3RhbmNlID0gKGNvb2tpZUphcj86IENvb2tpZUphcik6IEF4aW9zSW5zdGFuY2UgPT4ge1xuICAgIGNvbnN0IGF4aW9zSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICAgIC4uLihjb29raWVKYXIgJiYge1xuICAgICAgICAgICAgaHR0cEFnZW50OiBuZXcgSHR0cENvb2tpZUFnZW50KHtqYXI6IGNvb2tpZUphcn0pLFxuICAgICAgICAgICAgaHR0cHNBZ2VudDogbmV3IEh0dHBzQ29va2llQWdlbnQoe2phcjogY29va2llSmFyfSksXG4gICAgICAgIH0pLFxuICAgIH0pO1xuXG4gICAgYXhpb3NSZXRyeShheGlvc0luc3RhbmNlLCB7XG4gICAgICAgIHJldHJpZXM6IE5VTUJFUl9PRl9SRVRSSUVTLFxuICAgICAgICByZXRyeURlbGF5OiBheGlvc1JldHJ5LmV4cG9uZW50aWFsRGVsYXksXG4gICAgfSk7XG5cbiAgICByZXR1cm4gYXhpb3NJbnN0YW5jZTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVEeW9uZG9BcGlDbGllbnQgPSAoY29uZmlnOiBDbGllbnRDb25maWcpOiBEeW9uZG9BcGkgPT4ge1xuICAgIGNvbnN0IGF4aW9zSW5zdGFuY2UgPSBjcmVhdGVBeGlvc0luc3RhbmNlKGNvbmZpZy5jb29raWVKYXIpO1xuICAgIHJldHVybiBuZXcgRHlvbmRvQXBpKHVuZGVmaW5lZCwgY29uZmlnLmVuZHBvaW50LCBheGlvc0luc3RhbmNlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRJbnN0YW5jZU9mRHlvbmRvQXBpQ2xpZW50ID0gKGNvbmZpZz86IENsaWVudENvbmZpZywgbmV3SW5zdGFuY2UgPSBmYWxzZSk6IER5b25kb0FwaSA9PiB7XG4gICAgaWYgKCFjbGllbnQgfHwgbmV3SW5zdGFuY2UpIHtcbiAgICAgICAgaWYgKGNvbmZpZykge1xuICAgICAgICAgICAgY2xpZW50Q29uZmlnID0gY29uZmlnO1xuICAgICAgICAgICAgY2xpZW50ID0gY3JlYXRlRHlvbmRvQXBpQ2xpZW50KGNvbmZpZyk7XG4gICAgICAgICAgICByZXR1cm4gY2xpZW50O1xuICAgICAgICB9XG4gICAgICAgIHRocm93IEVycm9yKCdObyBEeW9uZG9BcGkgQ2xpZW50Q29uZmlnIFNwZWNpZmllZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIGNsaWVudDtcbn07XG4iXX0=