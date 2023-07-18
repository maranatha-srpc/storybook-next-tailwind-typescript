// import type { Preview } from "@storybook/react";
import './styles.css';
import './icomoon.css';
import '../src/app/globals.css';

// const preview: Preview = {
export const parameters = {
  docs: {
    ...require('@storybook/addon-docs/preview').parameters.docs,
  },
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

// export default preview;
