import 'dotenv/config';
import axios from 'axios';

const { GITLAB_TOKEN, PROJECT_ID } = process.env;

async function fetchGitLabIssues() {
  if (!GITLAB_TOKEN || !PROJECT_ID) {
    console.error('Error: GITLAB_TOKEN and PROJECT_ID must be set in .env');
    process.exit(1);
  }

  try {
    const url = `https://gitlab.com/api/v4/projects/${PROJECT_ID}/issues`;

    const response = await axios.get(url, {
      headers: {
        'Private-Token': GITLAB_TOKEN,
      },
    });

    const issues = response.data;
    console.log('GitLab Issues:', issues);
  } catch (error) {
    console.error('Error fetching GitLab issues:', error.message);
  }
}

async function createGitLabIssue(title, description) {
  if (!GITLAB_TOKEN || !PROJECT_ID) {
    console.error('Error: GITLAB_TOKEN and PROJECT_ID must be set in .env');
    process.exit(1);
  }

  try {
    const url = `https://gitlab.com/api/v4/projects/${PROJECT_ID}/issues`;

    const response = await axios.post(
      url,
      {
        title,
        description,
      },
      {
        headers: {
          'Private-Token': GITLAB_TOKEN,
        },
      }
    );

    console.log('New issue created:', response.data);
  } catch (error) {
    console.error('Error creating GitLab issue:', error.message);
  }
}

// fetchGitLabIssues();
createGitLabIssue('New Issue Title', 'This is the description of the new issue.');
