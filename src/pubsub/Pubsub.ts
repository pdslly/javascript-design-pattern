let _pubsub: object = {}
let _token: number = 0

export function Publish(namespace: string, arg: object): void {
	let topics = _pubsub[namespace] = _pubsub[namespace] || []
	topics.forEach(handler => handler.handle.call(null, arg))
}

function Unsubscripbe(token: number, namespace: string): Function {
	let topics = _pubsub[namespace]
	return (): void => {
		_pubsub[namespace] = topics.filter(handler => handler.token !== token)
	}
}

export function Subscribe(namespace: string, handle: Function): Function {
	let topics = _pubsub[namespace] = _pubsub[namespace] || []
	let token = _token++
	topics.push({
		token,
		handle
	})
	return Unsubscripbe(token, namespace)
}
