import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import Main from './lib/cylinder/Main';
//import Main from './lib/list/Main';

ReactDOM.render(<App />, document.getElementById('root'));
let newMain = new Main();
newMain.main();