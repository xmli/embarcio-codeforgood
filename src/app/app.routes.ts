import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DiscoverComponent } from './discover/discover.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const APP_ROUTES = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'profiles/:username',
        component: ProfileComponent
    },
    {
        path: 'discover',
        component: DiscoverComponent
    }
    ,
    {
        path: '**',
        component: NotFoundComponent
    }
]