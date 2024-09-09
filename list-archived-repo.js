import octokit from "./lib.js";

(async function() {
    for await (const response of octokit.paginate.iterator(
        octokit.rest.activity.listReposStarredByUser, {
            username: process.env.USER_NAME,
            per_page: 100,
        }
    )) {
        let result = response.data.filter(r => r.archived).map(r => r.html_url);
        if (result.length) {
            console.log(result);
        }
    }
})();