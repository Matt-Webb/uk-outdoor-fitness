Template.homeIndex.helpers({
    
    // to do: store as session!
    instructor: function () {
      return ClassInstructor.find();
    },

    // todo: define order of recent schedule!
    schedule: function () {
      return ClassSchedule.find({});
    }
});
