import { processTweet } from './marketingLogic';


describe('Test if processTweet function augments tweet correctly', () => {
  it('should append #Tomato to string', () => {
    expect(processTweet('Hello World')).toEqual('Hello World #Tomato')
  });

  it('should append #Tomato to string', () => {
    expect(processTweet('Hello World')).toEqual('Hello World #Tomato')
  });

  it('should not append #Tomato to string when it already exists', () => {
    expect(processTweet('Hello World #Tomato')).toEqual('Hello World #Tomato')
  });

  it('should substring tweet when exceeds 140 characters including the hashtag', () => {
    expect(processTweet('Hello World, today is a new day! This Tweet is going to exceed the allowed character allowance and will be subsquently use substring to make it fit')).toEqual('Hello World, today is a new day! This Tweet is going to exceed the allowed character allowance and will be subsquently use substring #Tomato')
  });

})
