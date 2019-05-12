import axios from 'axios';
import c3prLOG4 from "node-c3pr-logger/c3prLOG4";

const LOGIN_RETRY_TIME = 5 * 1000;

async function login({loginUrl, username, password, subscriptions, lcid, sha, euuid = 'init?'}) {

    try {
        const {data: jwt} = await axios.post(loginUrl, {username, password, subscriptions});
        c3prLOG4(`Successfully logged in on C3PR-HUB (${loginUrl}).`, {lcid, sha, euuid});
        return jwt;
    } catch (error) {
        c3prLOG4(`Error while logging in at ${loginUrl}.`, {lcid, sha, euuid, error});
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(login({loginUrl, username, password, subscriptions, lcid, sha, euuid}));
            }, LOGIN_RETRY_TIME);
        })
    }
}

export = {
    c3prHubClient: {
        login
    }
};