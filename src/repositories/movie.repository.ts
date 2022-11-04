import { inject } from '@loopback/core'
import { DefaultCrudRepository } from '@loopback/repository'
import { LocalDataSource } from '../datasources'
import { Movie, MovieRelations } from '../models'

export class MovieRepository extends DefaultCrudRepository<
Movie,
  typeof Movie.prototype.imdbID,
MovieRelations
> {
  constructor (
  @inject('datasources.Local') dataSource: LocalDataSource
  ) {
    super(Movie, dataSource)
  }
}
