/**
 * @date 2019-01-10
 * @author pdslly
 */
import ObserverList from './ObserverList'
import Observer from './Observer'

export default class Subject {
	observers: ObserverList = new ObserverList()
	addObserver(observer: Observer): void {
		this.observers.add(observer)
	}
	removeObserver(observer: Observer): void {
		this.observers.remove(this.observers.indexOf(observer))
	}
	notify(context: any): void {
		let observerCount: number = this.observers.count()
		for (let i = 0; i < observerCount; i++) {
			this.observers.get(i).update(context)
		}
	}
}