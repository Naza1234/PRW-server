const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Application = require('../models/applicationModels');

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'image');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

exports.upload = multer({
    storage: fileStorage,
    limits: { fileSize: 10000000 },
    fileFilter: (req, file, callback) => {
        const acceptableExtensions = ['png', 'jpg', 'jpeg', 'pdf'];
        if (!(acceptableExtensions.some(extension =>
            path.extname(file.originalname).toLowerCase() === `.${extension}`)
        )) {
            return callback(new Error(`Extension not allowed, accepted extensions are ${acceptableExtensions.join(',')}`));
        }
        callback(null, true);
    }
}).any();

exports.addApplicationWithFiles = async (req, res) => {
    try {
        const files = req.files;
        const data = {
            ...req.body,
            photo_id: files.find(file => file.fieldname === 'photo_id')?.path,
            proof_of_income: files.find(file => file.fieldname === 'proof_of_income')?.path,
            other_docs: files.find(file => file.fieldname === 'other_docs')?.path
        };

        const application = await Application.create(data);
        res.status(200).json(application);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.getAllApplications = async (req, res) => {
    try {
        const data = await Application.find({});
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.getSingleApplication = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Application.findById(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.updateSingleApplication = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Application.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.deleteSingleApplication = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Application.findByIdAndDelete(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
