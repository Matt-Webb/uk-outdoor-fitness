ClassInstructor = new Mongo.Collection("class-instructor");

Instructor = new SimpleSchema({
  name: {
    type: String
  },
  role: {
    type: String,
    optional: true
  },
  // locations: { // based array for multiple instances!
  //   type: [ClassLocation],
  //   optional: true
  // },
  bio: {
    type: String,
    optional: true
  },
  specialities: {
    type: [String],
    optional: true
  },
  image: { // url - provide default avatar
    type: String,
    optional: true
  },
  social: {
    type: Object,
    optional: true
  }
});
