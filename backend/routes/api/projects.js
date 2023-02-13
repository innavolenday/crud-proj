const express = require('express');
const router = express.Router();
const projectsController = require('../../controllers/projectsController');

router.route('/')
    .post(projectsController.createNewProject)
    .get(projectsController.getProjects)
    .put(projectsController.updateProject)
    .delete(projectsController.deleteProject)

router.route('/completed')
    .get(projectsController.getCompletedProjects)

router.route('/:id')
    .get(projectsController.getOneProject)
    
module.exports = router;