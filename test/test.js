'use strict';

const hooks = require('./package').DynamicHooks;

const obj = {
	method() {
		console.log('- LOG: Meme');
	}
}

hooks.hookAfter(obj, 'method', () => {
	console.log('- LOG: School');
});

hooks.hookBefore(obj, 'method', () => {
	console.log('- LOG: It is a')
});

obj.method();