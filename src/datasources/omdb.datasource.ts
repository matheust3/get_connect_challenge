import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'Omdb',
  connector: 'rest',
  options: {
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    },
    timeout: 15000,
  },
  operations: [{
    template: {
       method: "GET",
       url: "https://www.omdbapi.com/?apikey=c97bdf5d&t=avatar"
      //  "query":{
      //   "apikey": "c97bdf5d",
      //   "t": "{title}"
      //  }
    },
    functions: {
       getTitle: []
    }
 }],
  crud: false
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class OmdbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'Omdb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.Omdb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
