import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Test if components render correctly', () => {
  it('should return whether the h1 rendered', () => {
    render(<App />);
    const title = screen.getByText('Tweeter');
    expect(title).toBeInTheDocument();
  });

  it('should return whether the tweeterInput rendered', () => {
    render(<App />);
    const ele = screen.getByTestId('tweeter-input');
    expect(ele).toBeInTheDocument();
  });

  it('should return whether the convertedTweet rendered', () => {
    render(<App />);
    const ele = screen.getByTestId('tweeter-output');
    expect(ele).toBeInTheDocument();
  });

  it('should add hashtag to tweet', () => {
    render(<App />);

    const input = screen.getByLabelText('Text to tweetify:')
    const output = screen.getByLabelText('Tweetified text:')

    fireEvent.change(input, { target: { value: 'Super Tommy Day!' } })

    expect(output.value).toBe('Processing...')

    setTimeout(() => {
      expect(output.value).toBe('Super Tommy Day! #Tomato')
    }, 2500)
  })

})
