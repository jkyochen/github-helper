const octokit = require("./lib");

(async function() {
    const response = await octokit.rest.activity.listReposStarredByUser({
        username: process.env.USER,
        sort: "updated",
        direction: "asc",
        per_page: 100,
    });
    const result = response.data.map(r => ({
        html_url: r.html_url,
        pushed_at: r.pushed_at,
    }));
    console.log(result);
})();