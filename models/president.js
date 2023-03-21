module.exports = (mongoose) => {
  const presidentData = mongoose.Schema({
    name: {
      type: String
    },
    familyName: {
      type: String
    },
    rang: {
      type: String
    },
    party: {
      type: String
    },
    electedDate: {
      type: String
    },
    hobbies: {
      type: String
    },
    favriteFood: {
      type: String
    },

    wifeName: {
      type: String
    },
   
   
  })

  return mongoose.model('presidents', presidentData);
};
