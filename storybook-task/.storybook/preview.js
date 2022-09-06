import '../src/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// Registers the msw addon
import { initialize, mswDecorator } from 'msw-storybook-addon';

// Initialize MSW
initialize();

// Provide the MSW addon decorator globally
export const decorators = [mswDecorator];


//👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// All stories expect a theme arg
export const argTypes = { theme: { control: 'select', options: ['light', 'dark'] } };

// The default value of the theme arg to all stories
export const args = { theme: 'light' };