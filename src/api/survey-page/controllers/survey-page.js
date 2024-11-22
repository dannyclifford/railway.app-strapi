'use strict';

/**
 * survey-page controller
 */

const { createCoreController: createSurveyPageCtrl } = require('@strapi/strapi').factories;

module.exports = createSurveyPageCtrl('api::survey-page.survey-page');
