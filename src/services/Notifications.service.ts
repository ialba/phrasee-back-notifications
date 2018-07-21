import {
AwesomeAPIHandler
} from '../handlers'

import { Response }  from '../types/Response'


export class NotificationsService {

  async loadFeed(postId:string){
    const data = await AwesomeAPIHandler.loadFeedByPostId(postId)
    return new Response(data)
  }
}
