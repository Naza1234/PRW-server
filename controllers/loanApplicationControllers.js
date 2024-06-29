const Application = require('../models/loanApplicationModels');


exports.addApplication = async (req, res) => {
    try {
        // console.log(req.body);
        const application = await Application.create(req.body);
        res.status(200).json(application);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Get all applications
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

// Get a single application by ID
exports.getSingleApplication = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Application.findById(id);
        if (!data) {
            return res.status(404).json({
                message: 'Application not found'
            });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Update a single application by ID
exports.updateSingleApplication = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Application.findByIdAndUpdate(id, req.body, { new: true });
        if (!data) {
            return res.status(404).json({
                message: 'Application not found'
            });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Delete a single application by ID
exports.deleteSingleApplication = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Application.findByIdAndDelete(id);
        if (!data) {
            return res.status(404).json({
                message: 'Application not found'
            });
        }
        res.status(200).json({
            message: 'Application deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
