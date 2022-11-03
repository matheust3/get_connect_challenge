import { Entity, model, property } from '@loopback/repository'

@model()
export class SearchStr extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true
  })
    search: string

  @property({
    type: 'string',
    required: true
  })
    movieId: string

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor (data?: Partial<SearchStr>) {
    super(data)
  }
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SearchStrRelations {
  // describe navigational properties here
}

export type SearchStrWithRelations = SearchStr & SearchStrRelations
