import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('renders without crashing', () => {
    render(<Dashboard />);
  });
  it('strike', () => {
    let clicked = false;
    const { getByText } = render(<Controls strike={() => (clicked = true)} />);
    const strikeButton = getByText(/strike/i);
    fireEvent.click(strikeButton);
    expect(clicked).toBe(true);
  });
  it('strike with mocked function', () => {
    const click = jest.fn();
    const { getByText } = render(<Controls strike={click} />);
    const strikeButton = getByText(/strike/i);
    fireEvent.click(strikeButton);
    expect(click).toBeCalled();
  });
  it('ball with mocked function', () => {
    const click = jest.fn();
    const { getByText } = render(<Controls ball={click} />);
    const ballButton = getByText(/ball/i);
    fireEvent.click(ballButton);
    expect(click).toBeCalled();
  });
  it('foul with mocked function', () => {
    const click = jest.fn();
    const { getByText } = render(<Controls foul={click} />);
    const foulButton = getByText(/foul/i);
    fireEvent.click(foulButton);
    expect(click).toBeCalled();
  });
  it('hit with mocked function', () => {
    const click = jest.fn();
    const { getByText } = render(<Controls hit={click} />);
    const hitButton = getByText(/hit/i);
    fireEvent.click(hitButton);
    expect(click).toBeCalled();
  });
});
