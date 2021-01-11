// ----------------------
// dynamic-hooks
// v1.0.0
// ----------------------

'use strict';

/**
 * Namespace for 'dynamic-hooks' NPM module.<br>
 * Supplies utilities for cleanly hooking into functions.
 */
export namespace DynamicHooks {
	/**
 	 * Inserts hook function after target function in a single object.
     * @param {*} obj Target object.
     * @param {string} targetName The name of the target function in the target object.
     * @param {Function} hook Hook function to insert.
     * @returns {unknown} The return value of the target function.
	 */
	export function hookAfter(obj: any, targetName: string, hook: Function): unknown {
		const original: Function = obj[targetName];
		obj[targetName] = function() {
			const value = original.apply(this, arguments);
			hook.apply(this, [value, original, arguments]);
			return value;
		}
		return undefined;
	}

	/**
 	 * Inserts hook function before target function in a single object.<br>
	 * Note: You will not have access to the value of the target function in your hook.
     * @param {*} obj Target object.
     * @param {string} targetName The name of the target function in the target object.
     * @param {Function} hook Hook function to insert.
     * @returns {unknown} The return value of the target function.
	 */
	export function hookBefore(obj: any, targetName: string, hook: Function): unknown {
		const original: Function = obj[targetName];
		obj[targetName] = function() {
			hook.apply(this, [original, arguments]);
			return original.apply(this, arguments);
		}
		return undefined;
	}
}