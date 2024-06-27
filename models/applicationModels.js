const mongoose = require('mongoose');

const applicationSchema = mongoose.Schema(
    {
        productId: {
            type: String,
            required: false
        },
        applying_as: {
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
        email: {
            type: String,
            required: false
        },
        phone_number: {
            type: String,
            required: false
        },
        dob: {
            type: Date,
            required: false
        },
        additional_dob: {
            type: Date,
            required: false
        },
        other_applying: {
            type: String,
            required: false
        },
        total_people: {
            type: Number,
            required: false
        },
        history_as: {
            type: String,
            required: false
        },
        move_in_date: {
            type: String,
            required: false
        },
        street_address: {
            type: String,
            required: false
        },
        unit: {
            type: String,
            required: false
        },
        city: {
            type: String,
            required: false
        },
        state: {
            type: String,
            required: false
        },
        zip_code: {
            type: String,
            required: false
        },
        monthly_rent: {
            type: Number,
            required: false
        },
        landlord_name: {
            type: String,
            required: false
        },
        landlord_email: {
            type: String,
            required: false
        },
        landlord_phone: {
            type: String,
            required: false
        },
        employed:{
            type: String,
            required: false
        },
        employer: {
            type: String,
            required: false
        },
        position: {
            type: String,
            required: false
        },
        employment_start_date: {
            type: String,
            required: false
        },
        monthly_income: {
            type: Number,
            required: false
        },
        reference_name: {
            type: String,
            required: false
        },
        reference_phone: {
            type: String,
            required: false
        },
        other_sources_of_income: {
            type: String,
            required: false
        },
        bank_name: {
            type: String,
            required: false
        },
        animal_living: {
            type: String,
            required: false
        },
        vehicle: {
            type: String,
            required: false
        },
        smoke: {
            type: String,
            required: false
        },
        special_requests: {
            type: String,
            required: false
        },
        emergency_contact_name: {
            type: String,
            required: false
        },
        emergency_contact_relation: {
            type: String,
            required: false
        },
        emergency_contact_phone: {
            type: String,
            required: false
        },
        additional_comments: {
            type: String,
            required: false
        },
        photo_id: {
            type: String,
            required: false
        },
        proof_of_income: {
            type: String,
            required: false
        },
        other_docs: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
);

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;
