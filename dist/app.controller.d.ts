import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
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
