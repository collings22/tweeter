import { render, screen } from '@testing-library/react'
import ConvertedTweet from './ConvertedTweet'

const output = 'Hello World #Tomato'

describe('Simple ConvertedTweet Render', () => {
  it('should return whether the convertedTweet rendered', () => {
    render(<ConvertedTweet output={output} />);
    const ele = screen.getByTestId('tweeter-output');
    expect(ele).toBeInTheDocument();
  });

})