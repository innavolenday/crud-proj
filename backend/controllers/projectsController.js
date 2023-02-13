const projectModel = require("../models/Projects");

const createNewProject = async (req, res) => {

    const project = new projectModel(req.body);

    try {
        await project.save();
        res.send(project);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getProjects = async (req, res) => {

    const projects = await projectModel.find({});

    try {
        res.send(projects);
    } catch (error) {
        res.status(500).send(error);
    }
}

const updateProject = async (req, res) => {
    projectModel.findOneAndUpdate({_id : req.body.id},
        {$set : { status: req.body.status, name: req.body.name, description: req.body.description, owner: req.body.owner, ddate: req.body.ddate}}, 
        {new : true}, (err, updatedObj) => {
            if (err) {
                res.status(422).json({status : false, error : "Item not updated"}); 
            }
            else {
                res.status(200).json({ updatedObj }); 
            }
        })
}


const getCompletedProjects = async (req, res) => {

    const projects = await projectModel.where({ status: "completed"});

    try {
        res.send(projects);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getOneProject = async (req, res) => {

    const project = await projectModel.where({ _id: req.params.id});
    try {
        res.send(project);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteProject = async (req, res) => {
    await projectModel.findOneAndDelete({_id : req.body.id})
    try {
        res.status(200).json({status: true, message: "Item successfully deleted"}); 
    }
    catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    createNewProject,
    getProjects,
    updateProject,
    getCompletedProjects,
    getOneProject,
    deleteProject
}