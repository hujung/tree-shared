import SimpleSchema from 'simpl-schema';

// Placeholder database collection
// added
Activities = new Mongo.Collection('activities');

const Schemas = {};

Schemas.Activity = new SimpleSchema({
  name: {
    type: String,
    label: 'name',
  },
});

Activities.attachSchema(Schemas.Activity);

// Deny client side database mutations
Activities.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});
