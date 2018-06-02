const UNCONFIGURED = 'call hubClientConfig.init() before using the client.';

const hubClientConfig = {
    c3pr: {

        hub: {
            auth: {
                jwt: UNCONFIGURED
            },
            c3prHubUrl: UNCONFIGURED,
            loginUrl: UNCONFIGURED,
            projectsByCloneUrlHttp: (ignore): string => {throw new Error(UNCONFIGURED)},
        },

    },
    init(C3PR_HUB_URL, jwt) {
        hubClientConfig.c3pr.hub.c3prHubUrl = C3PR_HUB_URL;
        hubClientConfig.c3pr.hub.loginUrl = `${C3PR_HUB_URL}/api/v1/login`;
        hubClientConfig.c3pr.hub.projectsByCloneUrlHttp = (clone_url_http) => `${C3PR_HUB_URL}/api/v1/projects/?clone_url_http=${clone_url_http}`;
        hubClientConfig.c3pr.hub.auth.jwt = jwt;
    }
};

export default hubClientConfig;