//This file holds any configuration variables we may need
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://jwest23:SoFlo2323@ds127994.mlab.com:27994/jwest23', //place the URI of your mongo database here.
  },
  googleMaps: {
    key: ''
  },
  port: 8080
};
