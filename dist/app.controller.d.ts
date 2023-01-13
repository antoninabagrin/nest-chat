import { PusherService } from './pusher.service';
export declare class AppController {
    private pusherService;
    constructor(pusherService: PusherService);
    messages(date: Date, message: string): Promise<any[]>;
}
