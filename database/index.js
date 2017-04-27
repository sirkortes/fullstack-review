var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');


////////////////////// 
////////////////////// REPO SCHEMA
//////////////////////
var repoSchema = mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  owner: String,
  owner_url: String,
  private: Boolean,
  updated_at: Date,
  url: String,
  stars: Number,
  watchers: Number,
  forks: Number
});

var Repo = mongoose.model('Repo', repoSchema);


////////////////////// 
////////////////////// USER SCHEMA
//////////////////////
// var userSchema = mongoose.Schema({
//   id: Number,
//   username: String,
//   avatar: String,
//   url: String,
//   repos: Number,
//   gists: Number,
//   starred: Number,
//   orgs: Array, // of names? 
//   following: Number,
//   followers: Number
// });

// var User = mongoose.model('User', repoSchema);

module.exports.Repo = Repo;
// module.exports.User = User;
module.exports.DB = mongoose;


/*
String
Number
Date
Buffer
Boolean
Mixed
ObjectId
Array
*/