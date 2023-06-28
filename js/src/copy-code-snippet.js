/**
 * --------------------------------------------------------------------------
 * Bootstrap Pretty (0.2.2): copy-code-snippet.js
 * Licensed under Apache-2.0 (https://github.com/bootstrap-pretty/bootstrap-pretty/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

// eslint-disable-next-line import/no-unresolved
import ClipboardJS from 'clipboard';
import Tooltip from './bootstrap/tooltip.js';

const copyCodeSnippet = () => {
    const copyCodeSnippetTrigger = new ClipboardJS('.bp-copy-code-snippet-trigger');

    copyCodeSnippetTrigger.on('success', e => {
        const tooltip = Tooltip.getOrCreateInstance(e.trigger);

        e.clearSelection();

        tooltip.setContent({ '.tooltip-inner': 'Copied!' });

        setTimeout(() => {
            tooltip.hide();
            tooltip.setContent({ '.tooltip-inner': 'Copy' });
        }, 2000);
    });
};

copyCodeSnippet();

export default copyCodeSnippet;
