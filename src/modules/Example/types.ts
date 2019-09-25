import { EXAMPLE, ANOTHER_EXAMPLE } from "./constants";

export type State = {
	name: string;
};

export type Reducer = (
	state: State,
	payload: {
		type: typeof EXAMPLE | typeof ANOTHER_EXAMPLE;
		payload: any;
	}
) => State;

export type Props = {
	view: "create" | "read" | "update";
};
