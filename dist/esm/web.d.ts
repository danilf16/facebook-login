import { WebPlugin } from '@capacitor/core';
import type { FacebookLoginPlugin, FacebookLoginResponse, FacebookCurrentAccessTokenResponse, FacebookConfiguration } from './definitions';
declare global {
    interface Window {
        fbAsyncInit: () => void;
    }
}
export declare class FacebookLoginWeb extends WebPlugin implements FacebookLoginPlugin {
    initialize(options: Partial<FacebookConfiguration>): Promise<void>;
    private loadScript;
    login(options: {
        permissions: string[];
    }): Promise<FacebookLoginResponse>;
    logout(): Promise<void>;
    reauthorize(): Promise<FacebookLoginResponse>;
    getCurrentAccessToken(): Promise<FacebookCurrentAccessTokenResponse>;
    getProfile<T extends Record<string, unknown>>(options: {
        fields: readonly string[];
    }): Promise<T>;
    logEvent(): Promise<void>;
    setAutoLogAppEventsEnabled(): Promise<void>;
    setAdvertiserTrackingEnabled(): Promise<void>;
    setAdvertiserIDCollectionEnabled(): Promise<void>;
}
