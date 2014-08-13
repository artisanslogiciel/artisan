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