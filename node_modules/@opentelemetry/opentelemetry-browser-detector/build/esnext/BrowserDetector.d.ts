import { Detector, IResource, ResourceDetectionConfig } from '@opentelemetry/resources';
/**
 * BrowserDetector will be used to detect the resources related to browser.
 */
declare class BrowserDetector implements Detector {
    detect(config?: ResourceDetectionConfig): Promise<IResource>;
    /**
     * Validates browser resource attribute map from browser variables
     *
     * @param browserResource The un-sanitized resource attributes from browser as key/value pairs.
     * @param config: Config
     * @returns The sanitized resource attributes.
     */
    private _getResourceAttributes;
}
export declare const browserDetector: BrowserDetector;
export {};
//# sourceMappingURL=BrowserDetector.d.ts.map