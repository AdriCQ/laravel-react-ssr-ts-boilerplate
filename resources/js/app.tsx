import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { Provider as ReduxProvider } from 'react-redux';
import reduxStore from './helpers/redux'

const appName =
    window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    progress: {
        color: '#4B5563',
    },
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.tsx`,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            import.meta.glob('./pages/**/*.tsx')
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <ReduxProvider store={reduxStore}>
                <App {...props}></App>
            </ReduxProvider>
        );
    },
});
