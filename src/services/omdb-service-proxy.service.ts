import { inject, Provider } from '@loopback/core'
import { getService } from '@loopback/service-proxy'
import { OmdbDataSource } from '../datasources'
import { Movie } from '../models'

export interface OmdbServiceProxy {
  getTitle: (title: string) => Promise<Movie & { Response: string }>
}

export class OmdbServiceProxyProvider implements Provider<OmdbServiceProxy> {
  constructor (
    // Omdb must match the name property in the datasource json file
    @inject('datasources.Omdb')
    protected dataSource: OmdbDataSource = new OmdbDataSource()
  ) {}

  
  async value (): Promise<OmdbServiceProxy> {
    return await getService(this.dataSource)
  }
}
