export const startBlock = {
	init : function() {
		this.jsonInit({
			"type": "start",
			"message0": "start when RUN",
			"nextStatement": null,
			"tooltip": "skibidi"
		});
	}
}

export const startGenerator = function (block, generator) {
	return `start`
}