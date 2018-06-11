import * as React from 'react';

import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';

import App from "./App";

it("App meet user", ()=>{

  const appnow:any = TestUtils.renderIntoDocument(
    <App message="Alex" />
  );

  const appNode = ReactDOM.findDOMNode(appnow);
  
  expect(appNode.textContent).toEqual('Hello Alex');

})

it("App meet nameless user", ()=>{
  
  const appnow:any = TestUtils.renderIntoDocument(
    <App  />
  );

  const appNode = ReactDOM.findDOMNode(appnow);
  
  expect(appNode.textContent).toEqual('Hello None');
})

