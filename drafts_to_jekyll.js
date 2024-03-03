// Create a GitHub credential
let githubCredential = Credential.create("GitHub", "Enter your GitHub details for posting to your repository.");
githubCredential.addTextField("username", "Username");
githubCredential.addPasswordField("token", "Personal Access Token");
githubCredential.addTextField("repoName", "Repository Name");
githubCredential.addTextField("email", "Email Address");

// Prompt the user for credentials if not already saved
if (!githubCredential.authorize()) {
    console.log("Authorization failed or was cancelled by the user.");
    context.fail();
}

// Extract details from the credentials
const username = githubCredential.getValue("username");
const token = githubCredential.getValue("token");
const repoName = githubCredential.getValue("repoName");
const email = githubCredential.getValue("email");

// Prepare your post content
const title = draft.content.split("\n")[0].replace('# ', ''); // Assuming the first line of the draft is the title
const date = new Date().toISOString().split('T')[0];
const slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-').trim('-');
const fileName = `${date}-${slug}.md`;
const fullContent = draft.content; // Here you might format your draft content as needed
const encodedContent = Base64.encode(fullContent);

// Setup for the GitHub API request
const path = `_posts/${fileName}`;
const apiUrl = `https://api.github.com/repos/${username}/${repoName}/contents/${path}`;

data = {
    owner: `${username}`,
    repo: `${repoName}`,
    path: `${path}`,
    message: 'Send from Drafts',
    committer: {
      name: `${username}`,
      email: `${email}`
    },
    content: encodedContent
  }

// Create the HTTP request
let http = HTTP.create();
let response = http.request({
  "url": apiUrl,
  "method": "PUT",
  "headers": {
    "Authorization": `Bearer ${token}`,
    "User-Agent": "DraftsApp",
    "Content-Type": "application/json",
    'X-GitHub-Api-Version': '2022-11-28'
  },
  "data": data
});

// Process the response
if (response.statusCode === 200 || response.statusCode === 201) {
    console.log("Successfully created/updated the file on GitHub.");
} else {
    console.log("Failed to post to GitHub. Status code: " + response.statusCode + " Response: " + response.responseText);
}
