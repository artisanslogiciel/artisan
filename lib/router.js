Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('postsList', {
    path: '/',
    waitOn: function() {
      return Meteor.subscribe('posts');
    }
  });
  this.route('postSubmit', {
    path: '/posts/submit/'
  });
  this.route('postPage', {
    path: '/posts/:_id',
    data: function() { return Posts.findOne({_id: this.params._id}) },
    waitOn: function() {
      return Meteor.subscribe('post', this.params._id);
    }
  });
  this.route('postEdit', {
    path: '/posts/:_id/edit',
    data: function() { return Posts.findOne({_id: this.params._id}) },
    waitOn: function() {
      return Meteor.subscribe('post', this.params._id);
    }
  });
});