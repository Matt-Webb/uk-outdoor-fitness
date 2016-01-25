// define mongo collections:
// ClassSchedule = new Mongo.Collection("class-schedule");
// ClassInstructor = new Mongo.Collection("class-instructor");
// ClassUser = new Mongo.Collection("class-user");
// ClassAddress = new Mongo.Collection("class-address");
 ClassLocation = new Mongo.Collection("class-location");

Address = new SimpleSchema({
  venue: {
    type: String,
    optional: true
  },
  street: {
    type: String,
    optional: true,
    max: 100
  },
  city: {
    type: String,
    max: 50,
    optional: true
  },
  county: {
    type: String,
    max: 100,
    optional: true
  },
  longditude: {
    type: Number,
    decimal: true,
    optional: true
  },
  latitude: {
    type: Number,
    decimal: true,
    optional: true
  },
  postcode: {
    type: String,
    optional: true
  }
});

ClassLocation = new SimpleSchema({
    name: {
      type: String,
      optional: true
    },
    // address: {
    //   type: Schemas.Address
    // },
    image: { // url - provide default!
      type: String,
      optional: true
    },
    indoor: {
      type: Boolean
    },
    outdoor: {
      type: Boolean
    },
    active: {
      type: Boolean,
      optional: true
    }
});


// add schemas to Meteor Collections:
// ClassSchedule.attachSchema(Schemas.Class);
// ClassInstructor.attachSchema(Schemas.Instructor);
// ClassUser.attachSchema(Schemas.User);
// ClassLocation.attachSchema(Schemas.ClassLocation);
// ClassAddress.attachSchema(Schemas.Address);

ClassInstructor.allow({
  update : function(userid, instructor){
    return isAdmin();
  },
  insert : function(userid, instructor){
    return isAdmin();
  },
  remove : function(userid, instructor){
    return isAdmin();
  }
});
