# Drafts to GitHub Action

This repository contains a Drafts app action script that automates the process of posting content directly to a GitHub repository, specifically designed for Jekyll or other static site generators that use Markdown files in a `_posts` directory.

## Features

- Automatically formats Draft content into a Markdown file.
- Configures file naming based on the title and date.
- Posts content to your specified GitHub repository.
- Uses Drafts' Credentials for secure handling of GitHub authentication details.

## Prerequisites

Before using this action, ensure you have:

- The Drafts app installed on your device.
- A GitHub account and a repository where you want to post your drafts.
- A Personal Access Token (PAT) from GitHub with `repo` scope permissions.

## Setup

1. **Generate a Personal Access Token (PAT) on GitHub:**
   - Go to your GitHub account settings.
   - Navigate to Developer settings > Personal access tokens.
   - Generate a new token with `repo` scope.
   - Copy the generated token for later use.

2. **Add the Action to Drafts:**
   - Create a new action in Drafts.
   - Paste the provided script into the action's script step.

3. **Configure the Credential:**
   - The first time you run the action, Drafts will prompt you to enter your GitHub details:
     - **Username:** Your GitHub username.
     - **Personal Access Token:** The PAT you generated.
     - **Repository Name:** The name of the GitHub repository where you want to post.
     - **Email Address:** The email associated with your GitHub account (used for commit info).

## Usage

1. Write your draft in Markdown format. The first line should be the title, prefixed with `# ` (Markdown syntax for a heading).
2. Run the action you created.
3. If successful, the content will be posted to your GitHub repository in the `_posts` directory, named according to the draft's title and date.

## Troubleshooting

- **Authentication Errors:** Ensure your PAT is correct and has the necessary permissions.
- **HTTP Errors:** Check the console log in Drafts for detailed error messages. Common issues include incorrect repository names or network issues.

## Contributing

Contributions to this script are welcome! Please submit pull requests or issues on GitHub to suggest improvements or report bugs.

## License

This script is released under [MIT License](LICENSE).

## Acknowledgements

- Thanks to all contributors and users for feedback and suggestions.
- Drafts app for providing a powerful scripting environment.
