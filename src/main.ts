import * as core from '@actions/core'
import * as exec from '@actions/exec'
import {getConfig} from './config'

async function run(): Promise<void> {
  try {
    const config = await getConfig()
    if (config.name.length === 0) {
      core.setFailed('name required')
      return
    }

    if (config.url.length === 0) {
      core.setFailed('url required')
      return
    }

    let args = [
      'repo',
      'add',
      config.name,
      config.url,
    ]

    if (config.username.length !== 0) {
      args.push('--username', config.username)
    }

    if (config.password.length !== 0) {
      args.push('--password', config.password)
    }

    await exec.exec('helm', args)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
