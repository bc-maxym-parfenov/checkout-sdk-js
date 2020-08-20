export default interface StepTracker {
    trackOrderComplete(features?: Record<string, boolean>): void;
    trackCheckoutStarted(): void;
    trackStepViewed(step: string): void;
    trackStepCompleted(step: string): void;
}
