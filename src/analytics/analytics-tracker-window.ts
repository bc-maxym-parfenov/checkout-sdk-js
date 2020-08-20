export interface AnalyticsTracker {
    track(step: string, data: any): void;
    serializeEventProperties(object: any): string;
}

export default interface AnalyticsTrackerWindow extends Window {
    analytics: AnalyticsTracker;
}
