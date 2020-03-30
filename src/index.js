import React from "react";
import ReactDOM from "react-dom";

import singleSpaReact from 'single-spa-react';

import BasicExample from './router/index';

// ReactDOM.render(<BasicExample />, document.getElementById('app'));

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: BasicExample,
  domElementGetter,
  suppressComponentDidCatchWarning: true
});

export function bootstrap(props) {
  return reactLifecycles.bootstrap(props);
}

export function mount(props) {
  console.log('props', props);
  return reactLifecycles.mount(props);
}

export function unmount(props) {
  return reactLifecycles.unmount(props);
}

function domElementGetter() {
  // Make sure there is a div for us to render into
  let el = document.getElementById('app');
  if (!el) {
    el = document.createElement('div');
    el = 'app';
    document.body.appendChild(el);
  }

  return el;
}