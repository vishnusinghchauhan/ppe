const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new mongoose.Schema({
      
  email: {
    type: String,
    required: false
  },
  profile_url: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: false
  },
  currency: {
    type: String,
    required: false
  },
    position: {
    type: String,
    required: false
  },
    first_name: {
    type: String,
    required: false
  },
   last_name: {
    type: String,
    required: false
  },
 name: {
    type: String,
    required: false
  },
   region: {
    type: String,
    required: false
  },
   country: {
    type: String,
    required: false
  },

   address: {
    type: String,
    required: false
  },

 city: {
    type: String,
    required: false
  },

 zip: {
    type: String,
    required: false
  },

 introduction: {
    type: String,
    required: false
  },
   logo_url: {
    type: String,
    required: false
  },
   year: {
    type: String,
    required: false
  },

     vet_number: {
    type: String,
    required: false
  },
   reg_number: {
    type: String,
    required: false
  },
   accreditations: {
    type: String,
    required: false
  },

   contact_person: {
    type: String,
    required: false
  },
   contact_position: {
    type: String,
    required: false
  },

   website: {
    type: String,
    required: false
  },
   mobile_no: {
    type: String,
    required: false
  },

   mobile_no1: {
    type: String,
    required: false
  },

   how_here: {
    type: String,
    required: false
  },
  create_date: {
    type: Date,
    default: Date.now,
    index: true
  },
  is_deleted: {
    type: Boolean,
    default: false
  },

});

const Company = mongoose.model('Company', CompanySchema);

module.exports = Company;
