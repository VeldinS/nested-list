import { render, screen, fireEvent } from '@testing-library/react';
import NestedList from './List';

test('can add top-level item', () => {
    render(<NestedList />);
    fireEvent.click(screen.getByText('Add Top-Level Item'));
    expect(screen.getByDisplayValue('Item 1')).toBeInTheDocument();
});

test('can add nested item', () => {
    render(<NestedList />);
    fireEvent.click(screen.getByText('Add Top-Level Item'));
    fireEvent.click(screen.getAllByText('Add Child')[0]);
    expect(screen.getByDisplayValue('Item 1.1')).toBeInTheDocument();
});

test('can edit item name', () => {
    render(<NestedList />);
    fireEvent.click(screen.getByText('Add Top-Level Item'));
    const input = screen.getByDisplayValue('Item 1');
    fireEvent.change(input, { target: { value: 'New Name' } });
    expect(screen.getByDisplayValue('New Name')).toBeInTheDocument();
});

test('cannot add nested item beyond level 3', () => {
    render(<NestedList />);
    fireEvent.click(screen.getByText('Add Top-Level Item'));
    fireEvent.click(screen.getAllByText('Add Child')[0]);
    fireEvent.click(screen.getAllByText('Add Child')[1]);
    fireEvent.click(screen.getAllByText('Add Child')[2]);
    expect(screen.queryAllByText('Add Child').length).toBe(3);
});
