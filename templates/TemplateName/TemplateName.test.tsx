import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TemplateName from './TemplateName.tsx';

describe('<TemplateName />', () => {
  test('it should mount', () => {
    render(<TemplateName />);

    const templateName = screen.getByTestId('TemplateName');

    expect(templateName).toBeInTheDocument();
  });
});