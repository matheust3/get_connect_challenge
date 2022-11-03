// Uncomment these imports to begin using these cool features!

import { inject } from '@loopback/core'
import { get, param } from '@loopback/rest'
import { Movie } from '../models'
import { OmdbServiceProxy } from '../services'

export class QueryController {
  constructor (
    @inject('services.OmdbServiceProxy') protected service: OmdbServiceProxy) { }

  @get('/query')
  async query (@param.query.string('title') title: string): Promise<Movie> {
    return await this.service.getTitle(encodeURIComponent(title))
  }
}
