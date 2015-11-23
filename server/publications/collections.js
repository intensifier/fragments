Meteor.publish('collections', function () {
  return Collections.find({ user: this.userId });
});

Meteor.publish('collection', function (id) {
  check(id, String);

  var $conditions = [{ _id: id, is_public: true }];
  if (this.userId) {
    $conditions.push({ _id: id, user: this.userId });
  }

  return Collections.find({ $or: $conditions });
});