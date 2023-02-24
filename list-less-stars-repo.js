const octokit = require("./lib");

(async function() {
    const response = await octokit.rest.activity.listReposStarredByUser({
        username: process.env.USER,
        sort: "stars",
        direction: "asc",
        per_page: 10,
    });
    const result = response.data.map(r => ({
        html_url: r.html_url,
        stas: r.stargazers_count,
    }));
    console.log(result);
})();