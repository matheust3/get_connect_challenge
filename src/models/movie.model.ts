import {Entity, model, property} from '@loopback/repository';

@model()
export class Movie extends Entity {
  @property({
    type: 'string',
  })
  title?: string;

  @property({
    type: 'string',
  })
  year?: string;

  @property({
    type: 'string',
  })
  rated?: string;

  @property({
    type: 'string',
  })
  released?: string;

  @property({
    type: 'string',
  })
  runtime?: string;

  @property({
    type: 'string',
  })
  genre?: string;

  @property({
    type: 'string',
  })
  director?: string;

  @property({
    type: 'string',
  })
  writer?: string;

  @property({
    type: 'string',
  })
  actors?: string;

  @property({
    type: 'string',
  })
  plot?: string;

  @property({
    type: 'string',
  })
  language?: string;

  @property({
    type: 'string',
  })
  country?: string;

  @property({
    type: 'string',
  })
  awards?: string;

  @property({
    type: 'string',
  })
  poster?: string;

  @property({
    type: 'array',
    itemType: 'object',
  })
  rating?: object[];

  @property({
    type: 'string',
  })
  metascore?: string;

  @property({
    type: 'string',
  })
  imdbRating?: string;

  @property({
    type: 'string',
  })
  imdbVotes?: string;

  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  imdbId: string;

  @property({
    type: 'string',
  })
  type?: string;

  @property({
    type: 'string',
  })
  dvd?: string;

  @property({
    type: 'string',
  })
  boxOffice?: string;

  @property({
    type: 'string',
  })
  production?: string;

  @property({
    type: 'string',
  })
  website?: string;

  @property({
    type: 'string',
  })
  response?: string;


  constructor(data?: Partial<Movie>) {
    super(data);
  }
}

export interface MovieRelations {
  // describe navigational properties here
}

export type MovieWithRelations = Movie & MovieRelations;
