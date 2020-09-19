import Vue from 'vue';
import VueRouter from 'vue-router';

import { appStore } from "@/store/stores";

import MainView from '@/views/MainView';

import NotFoundView from '@/views/general/not_found/NotFoundView';
import LoginView from '@/views/general/login/LoginView';

import BerandaView from '@/views/general/beranda/BerandaView';
import ProfilView from '@/views/general/profil/ProfilView';

import BackupView from '@/views/pengaturan/backup/BackupView';
import AkunView from '@/views/pengaturan/akun/AkunView';
import VerifyEmailView from '@/views/email/verify/VerifyEmailView';
import ResetPasswordView from '@/views/email/password/ResetPasswordView';

const routes = [
	//{ path: '/login', component: LoginView, name: "login" },
	{ path: '/verifyemail/:token', component: VerifyEmailView, name: "verifyemail" },
	{ path: '/resetpassword/:token', component: ResetPasswordView, name: "resetpassword" },
	{ path: '/', component: MainView, name: "main",
		children: [
			{ path: 'pengaturan/backup', component: BackupView, name: "backup" },
			{ path: 'pengaturan/akun', component: AkunView, name: "akun" },
			{ path: 'profil', component: ProfilView, name: "profil" },
			{ path: '', component: BerandaView, name: "beranda" },
		] 
	},
	{ path: '*', component: NotFoundView, name: "not-found" }
]
const router = new VueRouter({
	mode: 'history',
	routes // short for `routes: routes`
})

router.afterEach((to, from) => {
  	appStore.setRouterBusy(false);
  	appStore.setRouteValid(true);
})
router.beforeEach((to, from, next) => {
  	appStore.setRouterBusy(true);
  	next();
})

Vue.use(VueRouter);

const safeRouterPush = async (route) => {
	await appStore.setRouterBusy(false);
	if ((!route.path || route.path != router.currentRoute.path)
		 && (!route.name || route.name != router.currentRoute.name)){
		return await router.push(route);
	}
}
router.safePush = safeRouterPush;

export { routes, router, safeRouterPush }
export default { routes, router }