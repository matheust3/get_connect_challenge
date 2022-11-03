// Uncomment these imports to begin using these cool features!

import { inject } from '@loopback/core'
import { get, param } from '@loopback/rest'
import { Movie, SearchStr } from '../models'
import { MovieRepository } from '../repositories'
import { SearchStrRepository } from '../repositories/search-str.repository'
import { OmdbServiceProxy } from '../services'

export class MovieController {
  constructor (
    @inject('services.OmdbServiceProxy') protected service: OmdbServiceProxy,
    @inject('repositories.MovieRepository') protected repository: MovieRepository,
    @inject('repositories.SearchStrRepository') protected searchRepository: SearchStrRepository
  ) { }


  @get('/history')
  async history():Promise<Movie[]>{
    return await this.repository.find()
  }

  @get('/query')
  async query (@param.query.string('title') title: string): Promise<Movie> {
    // Verifica se já existe um resultado para essa busca
    const localResult = await this.searchRepository.find({ where: { search: title } })
    if (localResult.length > 0) {
      return await this.repository.findById(localResult[0].movieId)
    } else {
      // Faz uma busca na api omdb
      const result = await this.service.getTitle(encodeURIComponent(title))
      if (result.Response === 'True') {
        // Salva essa busca
        await this.searchRepository.create(new SearchStr({ movieId: result.imdbID, search: title }))
        await this.repository.create(new Movie(result))
      }
      return result
    }
  }
}
