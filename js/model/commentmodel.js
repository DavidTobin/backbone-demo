/**
 * Comment model
 * All methods should live here that change the state of a comment
 *
 * @class CommentModel
 * @extends Backbone.Model
 * @author Bodnar Istvan <istvan@gawker.com>
 */
/*global CommentModel */
var CommentModel = Backbone.Model.extend(
/** @lends CommentModel.prototype */
	{
		/**
		 * Default values
		 */
	  defaults: {
	  	// Author default is taken from local storage
	  	author: localStorage.getItem('last-user')
	  },

		/**
		 * Validation
		 */
		validate: function(attrs, options) {						
			if (!attrs.author) {
				return "Please enter an author.";
			}

			if (!attrs.text) {
				return "Please enter a comment.";
			}

			return false;
		},

		/**
		 * Sample method to change the text of a comment model
		 */
		reverseText: function () {
			if (this.has('text') && this.get('text').length > 0) {
				this.set('text', this.get('text').split('').reverse().join(''));
			}
		}
	}
);