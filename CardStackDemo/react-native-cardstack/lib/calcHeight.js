"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var calcHeight = function calcHeight(indexs, staticHeight, hoverOffset, cardsLength) {
	var selectedIndex = indexs.selectedIndex,
	    hoveredIndex = indexs.hoveredIndex,
	    cardIndex = indexs.cardIndex;

	if (!selectedIndex && selectedIndex !== 0) {
		if (cardIndex < 0) return 0;
		var height = staticHeight / cardsLength * (cardsLength - cardIndex);
		return hoveredIndex === cardIndex && cardIndex !== 0 ? height + hoverOffset : height;
	}
	return selectedIndex === cardIndex ? staticHeight : 0;
};

exports.default = calcHeight;