/* global describe, it, expect */
define(function(require) {

	var Example = require("components/example");

	describe("Example", function () {

		describe("Something", function(){
			it("should tell us what something is", function(){

				var myExample = new Example("stuff");

				myExample.getSomething().should.equal("stuff");
			});
		});

	});

});