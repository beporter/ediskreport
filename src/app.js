import { h, render } from 'preact';
import { Provider } from 'preact-redux';
import Application from './components/Application';
import store from './store';

render(
    <Provider store={store}>
        <Application />
    </Provider>,
    document.getElementById('main')
);
