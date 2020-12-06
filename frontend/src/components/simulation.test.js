import { render, screen, fireEvent } from '@testing-library/react';
import { Simulation } from './simulation.js';

test('SimulationParameters', () => {
    render(<Simulation />);
    
    const cityName = screen.getByText(/Berlin/i);
    
    expect(cityName).toBeInTheDocument();
});

test('Maps', () => {
    render(<Simulation />);
    const mapName1 = screen.getByText(/Most Popular Pickup Points/i)
    const mapName2 = screen.getByText(/Most Popular Dropoff Points/i)
    
    expect(mapName1).toBeInTheDocument();
    expect(mapName2).toBeInTheDocument();
});