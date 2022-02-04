import { render, screen, fireEvent } from '@testing-library/react'
import TweetInput from './TweetInput'


const mockHandleOnInputChange = jest.fn();


describe('Simple TweetInput Render', () => {
  it('should return whether the tweeterInput rendered', () => {
    render(<TweetInput handleOnInputChange={mockHandleOnInputChange} />);
    const ele = screen.getByTestId('tweeter-input');
    expect(ele).toBeInTheDocument();
  });

  it('should expect change handler to be called', () => {
    render(<TweetInput handleOnInputChange={mockHandleOnInputChange} />);

    const ele = screen.getByLabelText('Text to tweetify:');
    // fireEvent.focus(ele);

    fireEvent.change(ele, {
      target: {
        value: 'Super Tommy Day'
      }
    });

    expect(ele.value).toBe('Super Tommy Day')//.toHaveBeenCalled()
  })

})