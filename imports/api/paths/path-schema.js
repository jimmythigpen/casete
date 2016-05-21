Paths.Schema = new SimpleSchema({
  userId: {
    type: String,
  },
  startTime: {
    type: Date,
  },
  endTime: {
    type: Date,
  },
  startCordinates: {
    type: [Object],
    optional: true,
  },
  endCordinates: {
    type: [Object],
    optional: true,
  },
});
