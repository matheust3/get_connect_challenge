import { inject, lifeCycleObserver, LifeCycleObserver } from '@loopback/core'
import { juggler } from '@loopback/repository'

const config = {
  name: 'Local',
  connector: 'memory',
  localStorage: '',
  file: './database/local.json'
}

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class LocalDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'Local'
  static readonly defaultConfig = config

  constructor (
    @inject('datasources.config.Local', { optional: true })
    dsConfig: object = config
  ) {
    super(dsConfig)
  }
}
