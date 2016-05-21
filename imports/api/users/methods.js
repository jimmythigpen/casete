  import './users.js';

  Meteor.methods({
    'users.updateFromFacebook'() {
      const user = Meteor.user();
      const facebookInfo = _.pick(user.services.facebook, 'first_name', 'last_name', 'email', 'gender', 'id');
      const { first_name: firstName, last_name: lastName, email, gender } = facebookInfo;
      const avatar = `http://graph.facebook.com/${facebookInfo.id}/picture/?type=large`;

      Users.update(Meteor.userId(), {
        $set: {
          'profile.firstName': firstName,
          'profile.lastName': lastName,
          'profile.email': email,
          'profile.gender': gender,
          'profile.avatar': avatar,
        },
      });

      return true;
    },
  });

