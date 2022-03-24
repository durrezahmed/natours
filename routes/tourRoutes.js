const express = require('express');
const tourController = require('./../controllers/tourController');

const router = express.Router();

// param middleware for checking the ID
// router.param('id', tourController.checkID);

// middleware for post request for checking the body
// .post(middleware_name, createTour);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
