export type Dictionary = {
	[key: string]: string;
};

export type State = {
	actionOpened: boolean;
	language: string;
};

export type Roles = "administrator" | "manager" | "operator" | "user";

export type Actions = "create" | "read" | "update" | "delete";

export type Path = {
	url: string;
	exact?: boolean;
};

export type Permissions = {
	role: Roles;
	blacklist?: Actions[];
	whitelist?: Path[];
	super?: Roles[];
}[];
