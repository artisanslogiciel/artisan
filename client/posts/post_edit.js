Template.postEdit.events({
  'submit form': function(e) {
    e.preventDefault();
    var post = {
      title: $(e.target).find('[name=title]').val(),
      body: $(e.target).find('[name=body]').val()
    };
    Posts.update({_id: this._id},post);
    Router.go('postPage', {_id: this._id});
  },

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this post?")) {
      Posts.remove(this._id);
      Router.go('postsList');
    }
  }
});