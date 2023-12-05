'use strict';

/**
 * official-game controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::official-game.official-game');
