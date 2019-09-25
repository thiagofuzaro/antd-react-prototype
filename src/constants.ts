import { Permissions } from "./types";

export const permissions: Permissions = [
	{
		role: "administrator"
	},
	{
		role: "manager"
	},
	{
		role: "operator",
		blacklist: ["delete"],
		whitelist: []
	},
	{
		role: "user",
		blacklist: ["update", "delete"],
		whitelist: []
	}
];
