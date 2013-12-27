define([
	// Any required modules
], function () {

	/**
	 * Defines the Example constructor
	 * @constructor Example
	 * @param {string} something - Just some string
	 */
	var Example = function (something) {
		this.something = something || false;
	};

	/**
	 * Returns the value of property `something`
	 * @method getSomething
	 * @returns {string|boolean}
	 */
	Example.prototype.getSomething = function () {
		return this.something;
	};

	return Example;

});
