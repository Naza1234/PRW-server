const mongoose = require('mongoose');

const loanApplicationSchema = mongoose.Schema(
  {
    loan_purpose: {
      type: String,
      required: true
    },
    employment_status: {
      type: String,
      required: true
    },
    annual_income: {
      type: String,
      required: true
    },
    home_address: {
      type: String,
      required: true
    },
    apt_suite_unit: {
      type: String,
      required: false
    },
    first_name: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: true
    },
    phone_number: {
      type: String,
      required: true
    },
    date_of_birth: {
      type: Date,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    ssn: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const LoanApplication = mongoose.model('LoanApplication', loanApplicationSchema);

module.exports = LoanApplication;
