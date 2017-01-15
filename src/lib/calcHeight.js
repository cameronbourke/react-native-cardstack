const calcHeight = (indexs, staticHeight, hoverOffset, cardsLength) => {
	const { selectedIndex, hoveredIndex, cardIndex } = indexs;
	if (!selectedIndex && selectedIndex !== 0) {
		if (cardIndex < 0) return 0;
		const height = (staticHeight / cardsLength) * (cardsLength - cardIndex);
		return (hoveredIndex === cardIndex && cardIndex !== 0)
			? height + hoverOffset
			: height;
	}
	return (selectedIndex === cardIndex) ? staticHeight : 0;
};


export default calcHeight;
