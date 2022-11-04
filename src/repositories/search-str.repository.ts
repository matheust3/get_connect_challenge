import { inject } from '@loopback/core'
import { DefaultCrudRepository } from '@loopback/repository'
import { LocalDataSource } from '../datasources'
import { SearchStr, SearchStrRelations } from '../models'

export class SearchStrRepository extends DefaultCrudRepository<
SearchStr,
  typeof SearchStr.prototype.search,
SearchStrRelations
> {
  constructor (
  @inject('datasources.Local') dataSource: LocalDataSource
  ) {
    super(SearchStr, dataSource)
  }
}
