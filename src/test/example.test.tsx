import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

function Button({ children }: { children: React.ReactNode }) {
  return <button>{children}</button>;
}

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
