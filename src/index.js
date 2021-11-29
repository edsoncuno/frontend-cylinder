import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import 'primereact/resources/themes/md-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';

import Main from './lib/cylinder/Main';

ReactDOM.render(<App />, document.getElementById('root'));
let newMain = new Main();
newMain.main();