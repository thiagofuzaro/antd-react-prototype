import produce from "immer";
import { Reducer, State } from "./types";
import { EXAMPLE, ANOTHER_EXAMPLE } from "./constants";

const INITIAL_STATE: State = {
  name: "ANTD REACT"
};

const example: Reducer = (state = INITIAL_STATE, { type, payload }) =>
  produce(state, draft => {
    switch (type) {
      case EXAMPLE:
        draft.name = payload;
        return;
      case ANOTHER_EXAMPLE:
        draft.name = payload;
        return;
    }
  });

export default example;
