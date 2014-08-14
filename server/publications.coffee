###
Meteor.publish('posts', function() {
  return Posts.find();
});

Meteor.publish('post', function(postId){
  return Posts.find({_id: postId});
});
###

Meteor.publish 'posts', ->
  Posts.find()

Meteor.publish 'post', (postId) ->
  Posts.find _id: postId

