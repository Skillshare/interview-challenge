import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Header>;

/**
 * Default Header component with Skillshare logo.
 * Use the theme toggle in the toolbar to switch between light/dark modes.
 */
export const Default: Story = {};

/**
 * Header on light background
 */
export const OnLightBackground: Story = {
  parameters: {
    backgrounds: { default: 'light' },
  },
};
