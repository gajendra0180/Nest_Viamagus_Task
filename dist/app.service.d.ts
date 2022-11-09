export declare class AppService {
    getHello(): string;
    login(): Promise<{
        token: any;
        message: string;
        error?: undefined;
    } | {
        error: any;
        token?: undefined;
        message?: undefined;
    }>;
}
