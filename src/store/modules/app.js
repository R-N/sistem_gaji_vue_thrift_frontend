import {
	Action,
	Mutation,
	MutationAction,
	VuexModule,
	getModule,
	Module
} from "vuex-module-decorators";
import { store, unregisterModule } from "@/store/index";

const name = 'app'
unregisterModule(name);

@Module({
	namespaced: true,
	name,
	store,
	dynamic: true
})
class AppStore extends VuexModule {
	globalLogout = false
	globalRefresh = false
	globalBusy = false
	tabBusy = false
	routerBusy = false
	tabDialogs = []
	lastUserPresentTime = new Date().getTime();
	userPresent = true

	@MutationAction({ mutate: ['globalBusy'] })
	async setGlobalBusy(globalBusy){
		return { globalBusy }
	}

	@MutationAction({ mutate: ['tabBusy'] })
	async setTabBusy(tabBusy){
		return { tabBusy }
	}

	@MutationAction({ mutate: ['routerBusy'] })
	async setRouterBusy(routerBusy){
		return { routerBusy }
	}

	@Mutation
	tabDialogPop() {
		this.tabDialogs.pop();
	}
	@Action({ commit: 'tabDialogPop' })
	popTabDialog() { }

	@Mutation
	tabDialogPush(item) {
		this.tabDialogs.push(item);
	}
	@Action({ commit: 'tabDialogPush' })
	pushTabDialog(item) { return item; }

	@MutationAction({ mutate: ['lastUserPresentTime', 'userPresent'] })
	async ping(){
		var now = new Date().getTime();
		return { lastUserPresentTime: now, userPresent: true };
	}
	@MutationAction({ mutate: ['userPresent'] })
	async setIdle(){
		return { userPresent: false }
	}
	get getIdleTime(){
		return () => (new Date().getTime() - this.lastUserPresentTime);
	}
	get idle(){
		return !this.userPresent;
	}
	@MutationAction({ mutate: ['globalRefresh'] })
	async setGlobalRefresh(globalRefresh){
		return { globalRefresh }
	}
	@MutationAction({ mutate: ['globalLogout'] })
	async setGlobalLogout(globalLogout){
		return { globalLogout }
	}
}
const appStore = getModule(AppStore);

const pinger = async (...args) => {
	if (appStore.getIdleTime() < 1000) return;
	await appStore.ping();
}
document.body.addEventListener('mousemove', pinger);
document.body.addEventListener('keypress', pinger);
document.body.addEventListener('mousedown', pinger);

export { name, appStore }
export default appStore;