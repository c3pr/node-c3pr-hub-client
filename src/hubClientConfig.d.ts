declare const hubClientConfig: {
    c3pr: {
        hub: {
            auth: {
                jwt: string;
            };
            c3prHubUrl: string;
            loginUrl: string;
            projectsByCloneUrlHttp: (ignore: any) => string;
        };
    };
    init(C3PR_HUB_URL: any, jwt: any): void;
};
export default hubClientConfig;