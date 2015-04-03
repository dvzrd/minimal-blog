Template.home.rendered = function() {
  if (Posts.find().count() === 0) {
    Session.set('noContent', true);
  } else {
    Session.set('noContent', false);
  }
};

Template['home'].helpers({
  posts: function() {
    return Posts.find({}, {sort: {submitted: -1}});
  }
});
