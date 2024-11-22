'use strict';

/**
 * service controller
 */

const { createCoreController: createSurveyPageController } =
  require("@strapi/strapi").factories;

module.exports = createCoreController('api::service.service');
