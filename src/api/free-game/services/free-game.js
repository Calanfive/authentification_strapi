'use strict';

/**
 * free-game service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::free-game.free-game');
