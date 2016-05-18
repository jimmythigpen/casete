Meteor.methods({

  // * * * * * * UPDATE * * * * * *`
  'users.updateFromFacebook' () {
    const user = Meteor.user();
    // const valuesFromGoogle = _.pick(user.services.google, 'given_name', 'family_name', 'picture');
    // const { given_name: firstName, family_name: lastName, picture: profilePicture } = valuesFromGoogle;

    // Users.update(Meteor.userId(), {
    //   $set: {
    //     'profile.firstName': firstName,
    //     'profile.lastName': lastName,
    //     'profile.profilePicture': profilePicture,
    //   }
    // });

    // return true;
  },

  'users.updatePreferences' (obj = {}) {
    Users.update(Meteor.userId(), {
      $set: {
        'profile.canDrive': obj.canDrive,
        'profile.availableSeats': obj.availableSeats,
        'profile.hasSetPreferences': true,
      },
    });
  },
});