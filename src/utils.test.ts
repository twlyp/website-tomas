import { describe, expect, it } from "vitest";
import { opacityToHex } from "./utils";

describe("opacityToHex", () => {
	it("should return the correct hex value for opacity 0", () => {
		const result = opacityToHex(0);
		expect(result).toBe("00");
	});

	it("should return the correct hex value for opacity 0.5", () => {
		const result = opacityToHex(0.5);
		expect(result).toBe("80");
	});

	it("should return the correct hex value for opacity 1", () => {
		const result = opacityToHex(1);
		expect(result).toBe("FF");
	});

	it.each([
		[0, "00"],
		[0.5, "80"],
		[1, "FF"],
	])("%s is converted to %s", (decimal, hex) => {
		expect(opacityToHex(decimal)).toBe(hex);
	});

	it("should throw an error for opacity less than 0", () => {
		expect(() => {
			opacityToHex(-0.5);
		}).toThrow("Opacity must be between 0 and 1");
	});

	it("should throw an error for opacity greater than 1", () => {
		expect(() => {
			opacityToHex(1.5);
		}).toThrow("Opacity must be between 0 and 1");
	});
});
