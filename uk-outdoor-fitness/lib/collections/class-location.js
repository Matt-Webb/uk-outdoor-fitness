ClassLocation = new Mongo.Collection("class-location");

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
