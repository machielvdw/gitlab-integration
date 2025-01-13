# GitLab REST API Example
An example REST API for GitLab. This API will return all the issues for a project, or create a new issue.

## Pre-requisites
1. A GitLab account with example project and issues etc.

2. A personal access token for the API, you can generate one using the following steps:
    1. Go to your GitLab account settings (Click on your profile picture and select "Preferences")
    2. Go to Access Tokens
    3. Create a new personal access token with scope you require

## Usage
1. Install the dependencies
```bash
npm install
```

2. Create a `.env` file with the following content:
```env
GITLAB_TOKEN = your_token_here
PROJECT_ID = your_project_id_here
```

3. Uncomment the code for the API call you want to make in `index.js`

4. Start the server
```bash
node index
```