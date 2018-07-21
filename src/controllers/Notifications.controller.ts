import {Path,  GET, PathParam} from "typescript-rest";

// Services
import {
  NotificationsService
} from "../services"

@Path("/notifications")
export class NotificationsController {

  private _notificationsService : NotificationsService

  constructor(){
    this._notificationsService = new NotificationsService()
  }

  @Path("/feed/:postId")
  @GET
  loadFeed(@PathParam("postId") postId: string) {
    return this._notificationsService.loadFeed(postId)
  }

}
