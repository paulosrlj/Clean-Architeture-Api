import { HttpRequest, HttpResponse } from './https'

export interface Controller {
  handle: (HttpRequest: HttpRequest) => Promise<HttpResponse>
}
