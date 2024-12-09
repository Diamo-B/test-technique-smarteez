import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/Button';

describe('Button Component', () => {
    test('renders the button', () => {
        render(<Button colorPrefix="blue" symbol="+" action={() => { }} />);

        const button = screen.getByText('+');
        expect(button).toBeInTheDocument();
    });
    
    test('applies the correct styles based on the colorPrefix', () => {
        render(<Button colorPrefix="red" symbol="-" action={() => { }} />);
        const button = screen.getByText('-');
        expect(button).toHaveClass('bg-red-600');
        expect(button).toHaveClass('hover:bg-red-700');
    });

    test('calls the action when the button is clicked', () => {
        const mockAction = jest.fn();
        render(<Button colorPrefix="blue" symbol="+" action={mockAction} />);
        const button = screen.getByText('+');
        fireEvent.click(button);
        expect(mockAction).toHaveBeenCalledTimes(1);
    });

    test('updates styles dynamically when colorPrefix changes', () => {
        const { rerender } = render(
            <Button colorPrefix="blue" symbol="+" action={() => { }} />
        );
        const button = screen.getByText('+');
        expect(button).toHaveClass('bg-blue-600');

        rerender(<Button colorPrefix="green" symbol="+" action={() => { }} />);
        expect(button).toHaveClass('bg-green-600');
    });
});
