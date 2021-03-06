var express = require('express');
var router = express.Router();
var assignmentController = require('../controllers/assignmentController');

/* List ALL Assignments, no grades */
/*router.route('/assignments')
  .get();

/* Make Submission Assignment */
/*router.route('/assignments')
  .post();*/

/* Make Evaluation Assignment */
/*router.route('/evalassignments')
  .post();*/

/* Retrieve an Assignment */
/*router.route('/assignments/:id')
  .get();*/

router.route('/active')
    .post(assignmentController.getActiveAssignments);


module.exports = router;
