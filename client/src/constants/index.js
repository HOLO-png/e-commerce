import DetailProduct from '../pages/DetailProduct';
import User from '../pages/User';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import Category from '../pages/Category';

import Cart from '../pages/Cart';
import News from '../pages/News';
import Payment from '../pages/Payment';
import Home from '../pages/Home';
import DashBoard from '../pages/Dashboard';

import VerifyEmail from '../pages/VerifyMail';
import ActivationEmail from '../pages/ActivationEmail';

import DashboardWidgets from '../components/DashBoard/DashboardWidgets';
import DashboardMain from '../components/DashBoard/DashboardMain';
import DashboardCharts from '../components/DashBoard/DashboardCharts';
import DashboardCustomer from '../components/DashBoard/DashboardCustomer';
import DashboardOrder from '../components/DashBoard/DashboardOrder';
import DashboardChat from '../components/DashBoard/DashboardChat';
import DashboardNews from '../components/DashBoard/DashboardNews';

export const MAIN_ROUTES = [
    {
        name: 'Home',
        path: '/',
        exact: true,
        component: Home,
    },
    {
        name: 'Products',
        path: '/product/:category/:name/:id',
        exact: true,
        component: DetailProduct,
    },
    {
        name: 'News',
        path: '/news',
        exact: true,
        component: News,
    },
    {
        name: 'Cart',
        path: '/cart',
        exact: true,
        component: Cart,
    },
    {
        name: 'Category',
        path: '/mobile/:keyWork',
        exact: true,
        component: Category,
    },
    {
        name: 'OrderProducts',
        path: '/checkout/:linkText',
        exact: true,
        component: Payment,
    },
    {
        name: 'User',
        path: '/User',
        exact: true,
        component: User,
    },
    {
        name: 'NotFound',
        path: '/*',
        exact: true,
        component: NotFound,
    },
];

export const LOGIN_ROUTES = [
    {
        name: 'Login',
        path: '/buyer/:isStateLogin',
        exact: true,
        component: Login,
    },
    {
        name: 'Verify Email',
        path: '/verify-email',
        exact: true,
        component: VerifyEmail,
    },
    {
        name: 'ActivateAccount',
        path: '/activate/:activation_token',
        exact: true,
        component: ActivationEmail,
    },
];

// export const FILE_USER = [
//     {
//         name: 'UserAccount',
//         path: '/user/profile',
//         exact: true,
//         component: FileUser,
//     },
//     {
//         name: 'Payment',
//         path: '/user/payment',
//         exact: false,
//         component: PaymentUser,
//     },
//     {
//         name: 'Address',
//         path: '/user/address',
//         exact: false,
//         component: AddressUser,
//     },
//     {
//         name: 'Password',
//         path: '/user/password',
//         exact: false,
//         component: PasswordUser,
//     },
// ];

// export const ORDER_WHEEL = [
//     {
//         name: 'AllProduct',
//         path: '/user/all',
//         exact: true,
//         component: OrderUser,
//     },
//     {
//         name: 'AllProduct',
//         path: '/user/wheel',
//         exact: true,
//         component: WheelUser,
//     },
// ];

// export const NOTIFICATION_USER = [
//     {
//         name: 'OrderUpdate',
//         path: '/user/order-update',
//         exact: true,
//         component: OrderUpdate,
//     },
//     {
//         name: 'Promotion',
//         path: '/user/promotion',
//         exact: false,
//         component: Promotion,
//     },
//     {
//         name: 'WalletUpdate',
//         path: '/user/wallet-update',
//         exact: false,
//         component: WalletUpdate,
//     },
//     {
//         name: 'Work',
//         path: '/user/work',
//         exact: false,
//         component: Work,
//     },
//     {
//         name: 'UpdatedReview',
//         path: '/user/updated-review',
//         exact: false,
//         component: UpdatedReview,
//     },
// ];

export const DASHBOARD_MAIN = [
    {
        name: 'Dashboard Main',
        path: '/dashboard/:url',
        exact: true,
        component: DashBoard,
    },
    {
        name: 'DashboardWidgets',
        path: '/dashboard/widgets/:url',
        exact: false,
        component: DashBoard,
    },
];

export const DASHBOARD_ROUTES = [
    {
        name: 'Dashboard Main',
        path: '/dashboard/main',
        exact: false,
        component: DashboardMain,
    },
    {
        name: 'Dashboard Widgets list all',
        path: '/dashboard/widgets/list-all/:keyProducts',
        exact: false,
        component: DashboardWidgets,
    },
    {
        name: 'DashboardWidgets',
        path: '/dashboard/widgets',
        exact: false,
        component: DashboardWidgets,
    },
    {
        name: 'Dashboard Charts',
        path: '/dashboard/charts',
        exact: false,
        component: DashboardCharts,
    },
    {
        name: 'DashboardCustomer',
        path: '/dashboard/customer',
        exact: false,
        component: DashboardCustomer,
    },
    {
        name: 'Dashboard Order',
        path: '/dashboard/order',
        exact: false,
        component: DashboardOrder,
    },
    {
        name: 'Dashboard Chat',
        path: '/dashboard/chat',
        exact: false,
        component: DashboardChat,
    },
    {
        name: 'Dashboard News',
        path: '/dashboard/news',
        exact: false,
        component: DashboardNews,
    },
    {
        name: 'Dashboard Logout',
        path: '/login',
        exact: false,
    },
];
