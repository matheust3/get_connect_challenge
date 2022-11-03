import { Entity, model, property } from '@loopback/repository';

@model({ settings: { strict: false } })
export class Movie extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true
  })
    imdbID: string

  @property({
    type: 'string'
  })
    response?: string

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor (data?: Partial<Movie>) {
    super(data)
  }
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MovieRelations {
  // describe navigational properties here
}

export type MovieWithRelations = Movie & MovieRelations
