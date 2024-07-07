export function opacityToHex(opacity: number) {
	if (opacity < 0 || opacity > 1)
		throw new Error("Opacity must be between 0 and 1");

	return Math.round(opacity * 255)
		.toString(16)
        .toUpperCase()
		.padStart(2, "0");
}
