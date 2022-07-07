import create from "zustand";

const InitialState: NState.IInitialState = {};

const useStore = create<NState.IInitialState>(() => InitialState);

export default useStore;
