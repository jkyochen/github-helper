import octokit from "./lib.js";
import 'dotenv/config'

(async function() {

    const response = await octokit.request('GET /users/{username}/starred', {
      username: process.env.USER_NAME,
      sort: "updated",
      direction: "asc",
      per_page: 100,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });

    const result = response.data.map(r => ({
        html_url: r.html_url,
        pushed_at: r.pushed_at,
    }));
    console.log(result);
})();