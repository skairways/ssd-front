import { IUser } from "@/shared/types/example-user"

export interface IUserCard {
	user: IUser
	onClick: () => void
}
