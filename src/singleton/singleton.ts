export namespace Singleton {
	var instance: object = null
	class Foo {
		constructor(public name: string) {}
	}
	export function getInstance(): object {
		if (instance === null) {
			instance = new Foo('single')
			return instance
		} else {
			return instance
		}
	}
}
