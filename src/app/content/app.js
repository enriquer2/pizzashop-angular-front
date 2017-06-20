import { App } from '../module';
import {} from './appctrl';
import html from './app.html';
import {} from './content';
import {} from './menu';
import {} from './toolbar';

export const ilApp = {
    template: html,
    controller: 'appCtrl'
}
App.component('ilApp', ilApp);