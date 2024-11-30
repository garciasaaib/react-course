import { LazyExoticComponent } from 'react';
import { lazy } from 'react'
import { NoLazy } from '../01-lazyload/pages/NoLazy';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';
import { ShoppingPage as StateInitializer } from '../03-state-initializer/pages/ShoppingPage';
import { HelloWorld } from '../01-helloworld/HelloWorld';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    name: string;
    component: LazyExoticComponent<JSXComponent> | JSXComponent;
    to: string;
}

// definimos LazyLayout como un componente Lazy
const LazyLayout = lazy(() => import(/* webpackChunkName: "Page1" */'../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [
    {
        path: '/hello-world',
        to: '',
        component: HelloWorld,
        name: 'HelloWorldApp'
    },
    {
        path: '/',
        to: '',
        component: StateInitializer,
        name: 'inits'
    },
    {
        path: '/state-initializer',
        to: '',
        component: StateInitializer,
        name: 'State-Initializer'
    },
    {
        path: '/control-props',
        to: '',
        component: ShoppingPage,
        name: 'Shopping-Page'
    },
    {
        path: '/no-lazy',
        to: 'no-lazy',
        component: NoLazy,
        name: 'Not-lazy'
    },
    {
        path: '/lazylayout/*',
        to: '/lazylayout/',
        component: LazyLayout,
        name: 'LazyLayout'
    }
]