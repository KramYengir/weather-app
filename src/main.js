import * as API from './modules/api';
import * as Helper from './modules/helpers';
import * as DOM from './modules/dom';

import './styles/main.scss';

// set some placeholder values for when the page
// loads for the first time
function domInit(){
    DOM.init();
}

domInit();
