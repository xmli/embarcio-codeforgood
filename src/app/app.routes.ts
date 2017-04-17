import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DiscoverComponent } from './discover/discover.component';
import { NotFoundComponent } from './not-found/not-found.component';

const APP_ROUTES = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'profile/:username',
        component: ProfileComponent,
        data: {
            name: 'Sean',
            age: 20
        }
    },
    {
        path: 'discover',
        component: DiscoverComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
]

export default APP_ROUTES;