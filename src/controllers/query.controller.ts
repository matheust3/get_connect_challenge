// Uncomment these imports to begin using these cool features!

import { inject, service } from "@loopback/core";
import { get, Request, RestBindings } from "@loopback/rest";
import { OmdbServiceProxy } from "../services";

// import {inject} from '@loopback/core';


export class QueryController {
  constructor(
    @inject('services.OmdbServiceProxy') private service: OmdbServiceProxy ) { }

  @get('/query')
  request(): object{
    return{
      test: this.service.getTitle()
    }
  }
}
