Meteor.startup(function () {   
  AccountsEntry.config({
    homeRoute: '/',                    // mandatory - path to redirect to after sign-out
    dashboardRoute: '/' ,     // mandatory - path to redirect to after successful sign-in
    profileRoute: '/',
    passwordSignupFields: 'EMAIL_ONLY',
    showOtherLoginServices: true,      // Set to false to hide oauth login buttons on the signin/signup pages. Useful if you are using something like accounts-meld or want to oauth for api access
    extraSignUpFields: [{             // Add extra signup fields on the signup page
      field: "username",                           // The database property you want to store the data in
      name: "This Will Be The Initial Value",  // An initial value for the field, if you want one
      label: "Nom d'utilisateur",                      // The html lable for the field
      type: "text",                            // The type of field you want
      required: true                           // Adds html 5 required property if true
     }]
  });
  T9n.language = "fr";

});