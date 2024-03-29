const validator = require('validator')
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : ''
  data.password = !isEmpty(data.password) ? data.password : ''

  
  if(!validator.isEmail(data.email)){
    errors.email = "Email is invalid"
  }
  
  if(validator.isEmpty(data.email)){
    errors.email = "Email Field is required"
  }
  
  if(validator.isEmpty(data.password)){
    errors.password = "Password Field is required"
  }

  if(!validator.isLength(data.password, {min: 6, max: 20})){
    errors.password = "Password must be at least 6 characters"
  }

  return {
    errors, isValid: isEmpty(errors)
  }
}