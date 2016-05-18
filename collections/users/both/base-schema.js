Users.BaseSchema = new SimpleSchema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  avatar: {
    type: String,
    optional: true,
  },
  zipcode: {
    type: String,
    optional: true,
  },
});

