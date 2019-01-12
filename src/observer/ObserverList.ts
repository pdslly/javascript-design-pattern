import Observer from './Observer'

export default class ObserverList {
	observerList: Observer[] = []
	add(observer: Observer): void {
		this.observerList.push(observer)
	}
	count(): number {
		return this.observerList.length
	}
	get(index: number): Observer {
		return this.observerList[index]
	}
	indexOf(observer: Observer): number {
		return this.observerList.indexOf(observer)
	}
	remove(index: number): void {
		this.observerList.splice(index, 1)
	}
}