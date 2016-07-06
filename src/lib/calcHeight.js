export default (indexs, staticHeight, hoverOffset, cardsLength) => {
	const { selectedIndex, hoveredIndex, cardIndex } = indexs;
	if (!selectedIndex && selectedIndex !== 0) {
		if (!cardIndex && cardIndex > -1) return 0;
		const height = (staticHeight / cardsLength) * (cardsLength - cardIndex);
		return (hoveredIndex === cardIndex && cardIndex !== 0)
			? height + hoverOffset
			: height;
	}
	return (selectedIndex === cardIndex) ? staticHeight : 0;
};
