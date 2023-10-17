export interface IInitialState {
	selectedUserId: undefined | string
}

export interface ISelectedUsersStore extends IInitialState {
	selectUser: (id: string) => void
}
