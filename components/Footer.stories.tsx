import type { Meta, StoryObj } from '@storybook/react';
import Footer from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Footer>;

/**
 * Default Footer component with current year
 */
export const Default: Story = {};

/**
 * Footer in page context (with padding)
 */
export const InPageContext: Story = {
  decorators: [
    (Story) => (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1, padding: '20px' }}>
          <p>Page content</p>
        </div>
        <Story />
      </div>
    ),
  ],
};
