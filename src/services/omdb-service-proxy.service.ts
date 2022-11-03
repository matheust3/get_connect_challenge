import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {OmdbDataSource} from '../datasources';

export interface OmdbServiceProxy {
  getTitle(): Promise<object>;
}

export class OmdbServiceProxyProvider implements Provider<OmdbServiceProxy> {
  constructor(
    // Omdb must match the name property in the datasource json file
    @inject('datasources.Omdb')
    protected dataSource: OmdbDataSource = new OmdbDataSource(),
  ) {}

  value(): Promise<OmdbServiceProxy> {
    return getService(this.dataSource);
  }
}
