'use strict';

/**
 * official-game service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::official-game.official-game');
