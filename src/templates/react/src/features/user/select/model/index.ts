import { create } from "zustand"
import { devtools } from "zustand/middleware"

import { IInitialState, ISelectedUsersStore } from "./types"

const initialState: IInitialState = {
	selectedUserId: undefined,
}

export const useSelectedUserSlice = create<ISelectedUsersStore>()(
	devtools((set) => ({
		...initialState,
		selectUser: (id: string) => {
			set({ selectedUserId: id })
		},
	})),
)
