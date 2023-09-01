// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
/// <reference types="lucia" />
declare global {
	namespace App {
		interface Error {
			message: string;
			info?: string;
		}
		interface Locals {
			auth: import('lucia').AuthRequest;
		}
		namespace Lucia {
			type Auth = import('$lib/server/lucia').Auth;
			type DatabaseUserAttributes = {};
			type DatabaseSessionAttributes = {};
		}
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
