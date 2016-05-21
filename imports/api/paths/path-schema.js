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
  startCoordinates: {
    type: [Object],
    optional: true,
  },
  endCoordinates: {
    type: [Object],
    optional: true,
  },
});
