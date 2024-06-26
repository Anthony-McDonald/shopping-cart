import { describe, it, expect} from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../src/App.jsx'

describe('something truthy and falsy', () => {
    it('true to be true', () => {
        expect(true).toBe(true);
    })
    it('false to be false', () => {
        expect(false).toBe(false);
    });
});

describe('App', () => {
  it('renders headline', () => {
    render(<App title="React" />);

    screen.debug();

    // check if App components renders headline
  });
});

describe("App component", () => {
  it("renders correct heading", () => {
    render(<App />); // Render your App component

    const heading = screen.getByText('Our First Test', { selector: 'h1' });
  
    expect(heading).toBeInTheDocument();
  })
})

// Odin's example test, disabled because of App.jsx having more in it than a singular h1 element

// describe("App component", () => {
//   it("renders correct heading", () => {
//     render(<App />);
//     expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
//   });
// });

