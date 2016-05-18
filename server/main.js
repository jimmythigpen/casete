import { Meteor } from 'meteor/meteor';


Meteor.startup(() => {
  ServiceConfiguration.configurations.upsert(
    { service: 'facebook' },
    { $set: {
        appId: "990360477679423",
        secret: "611f0668d811350b7b372e4d2a8ab784",
      },
    },
  );
});
