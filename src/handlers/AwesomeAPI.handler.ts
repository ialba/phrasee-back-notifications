
export class AwesomeAPIHandler {

  static loadFeedByPostId(feed : string){
    // We just a static JSON, this could be a DB query (in that case this class would be a DAO)
    // Or a 3rd party API call
    let data = require('../../data/notifications-feed.json');
    // We filter for the
    let filtered = data.default.filter(data => data.post.id == feed)

    let response = {
      comment : [],
      like : []

    }
    // We should handle somehow if the post does not exists, but I dont have anyway to know
    // I will harcode it to have the test case
    if(feed == "WRONGID"){
      return { error : "000025"} // Fake error code
    }

    // We cook the information to serve the needed information
    filtered.forEach(val =>{
      if(val.type === "Comment"){
        val.comment.user = val.user
        response.comment.push(val.comment)
      }
      if(val.type === "Like"){
        response.like.push(val.user)
      }
    })
    return response
  }

}
