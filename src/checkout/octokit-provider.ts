import * as github from '@actions/github'
import {Octokit} from '@octokit/rest'
import {getServerApiUrl} from './url-helper'

// Centralize all Octokit references by re-exporting
export {Octokit} from '@octokit/rest'

export type OctokitOptions = {
  baseUrl?: string
  userAgent?: string
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function getOctokit(authToken: string, opts: OctokitOptions) {
  const options: Octokit.Options = {
    baseUrl: getServerApiUrl(opts.baseUrl)
  }

  if (opts.userAgent) {
    options.userAgent = opts.userAgent
  }

  return new github.GitHub(authToken, options)
}
