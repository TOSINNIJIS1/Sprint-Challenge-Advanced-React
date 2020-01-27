import React from 'react';
import * as rtl from '@testing-library/react';

import ReactDOM from 'react-dom';
import App from './App';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders without crashing', () => {
  const wrapper = rtl.render(<App/>)
  expect(wrapper).toBeVisible
}
);

it("contain ", () => {
  const {getByTestId} = rtl.render(<App />)

  getByTestId('playersInfo')
})