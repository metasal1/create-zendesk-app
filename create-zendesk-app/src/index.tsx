
import * as React from 'react';
import { render } from 'react-dom';
import { DEFAULT_THEME, ThemeProvider } from '@zendeskgarden/react-theming';
import Example from './Example';

/* Optional CSS normalization with selected element resets */
import '@zendeskgarden/css-bedrock';

const rootElement = document.getElementById('root');

render(
  <div style={{ padding: DEFAULT_THEME.space.md }}>
    <ThemeProvider>
      <Example />
    </ThemeProvider>
  </div>,
  rootElement
);
