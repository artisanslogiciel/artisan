Meteor.publish('posts', function() {
  return Posts.find();
});

Meteor.publish('post', function(postId){
  return Posts.find({_id: postId});
});