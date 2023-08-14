import * as core from '@actions/core'

type Config = {
  // the name of the repository to add
  name: string

  // the URL of the repository to add
  url: string

  // the username of the user to authenticate to the repository
  username: string

  // the password of the user to authenticate to the repository
  password: string
}

export async function getConfig(): Promise<Config> {
  return {
    name: core.getInput('name') || process.env['REPO_NAME'] || '',
    url: core.getInput('url') || process.env['REPO_URL'] || '',
    username: core.getInput('username') || process.env['REPO_USERNAME'] || '',
    password: core.getInput('password') || process.env['REPO_PASSWORD'] || ''
  }
}
