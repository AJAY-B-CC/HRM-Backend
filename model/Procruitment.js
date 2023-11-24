const mongoose = require("mongoose");

const procruitmentSchema = new mongoose.Schema({
	productDescription: {
		type: String,
	},
	buisnessJustification: {
		type: String,
	},
	quantity: {
		type: Number,
	},
	priority: {
		type: String,
		default: "Low",
	},
	productLink: {
		type: String,
	},
	quoteComparison: {
		type: String,
	},
	vendorName: {
		type: String,
	},
	vendorNumber: {
		type: Number,
	},
	employeeid: {
		type: mongoose.Schema.Types.ObjectId,
	},
	attachments: {
		public_id: {
			type: String,
		},
		url: {
			type: String,
		},
	},
});

module.exports = mongoose.model("procruitment", procruitmentSchema);
