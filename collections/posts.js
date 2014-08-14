Posts = new Meteor.Collection("posts", {
  schema: {
    title: {
      type: String,
      label: "Title",
      max: 200
    },
    author: {
      type: String,
      label: "Author"
    },
    authorId: {
      type:String,
      label: "AuthorId"
    },
    body: {
      type: String,
      label: "Body",
    }
  }
});

Meteor.methods({
  post: function(postAttributes){
    var user = Meteor.user();
    var post = _.extend(_.pick(postAttributes, 'title', 'body'),{
      submitted: new Date().getTime(),
      authorId:  user._id,
      username:  user.profile.username,
    });

    var postId = Posts.insert(post);

    return postId;
  }
});
