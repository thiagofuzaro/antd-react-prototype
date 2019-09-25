import { EXAMPLE } from "./constants";

export const example = (payload: string) => ({
	type: EXAMPLE,
	payload
});

export const anotherExample = (payload: number) => ({
	type: EXAMPLE,
	payload
});
