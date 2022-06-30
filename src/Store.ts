import create from "zustand";

const InitialState: State.InitialState = {};

const useStore = create<State.InitialState>(() => InitialState);

export default useStore;
