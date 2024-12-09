import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

describe("App Component",()=>{

  test("Initial count should be 0 and number should be black", ()=>{
    render(<App/>);
    const count = screen.getByTestId("count") 
    expect(count).toBeInTheDocument();
    expect(count).toHaveClass("text-black")
  })
  
  test('renders both buttons', () => {
    render(<App />);
    expect(screen.getByText('+')).toBeInTheDocument();
    expect(screen.getByText('-')).toBeInTheDocument();
  });

  test('increments the count and changes color correctly', () => {
    render(<App />);
    const incrementButton = screen.getByText('+');
    fireEvent.click(incrementButton);
    const count = screen.getByTestId("count")
    expect(count).toHaveTextContent("1");
    expect(count).toHaveClass("text-blue-600")
  });

  test('decrements the count and changes color correctly', () => {
    render(<App />);
    const decrementButton = screen.getByText('-');
    fireEvent.click(decrementButton);
    const count = screen.getByTestId("count")
    expect(count).toHaveTextContent("-1");
    expect(count).toHaveClass("text-red-600")
  });

})