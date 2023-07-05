import { render, screen } from '@testing-library/react';
import Button, { ThemeButton } from './Button';

describe('Button Component', () => {
    test('Test Render', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('Test Clear Theme', () => {
        const { debug } = render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        debug();
    });
});
