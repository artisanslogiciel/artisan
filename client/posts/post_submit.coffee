Template.postSubmit.events
  'submit form': (e) ->
    e.preventDefault()
    post =
      title:     $(e.target).find('[name=title]').val()
      body:      $(e.target).find('[name=body]').val()
      authorId:  Meteor.user()._id
      username:  Meteor.user().profile.username

    Meteor.call 'post', post, (error, id) ->
      if error
        return alert error.reason

      Router.go 'postPage', _id: id
