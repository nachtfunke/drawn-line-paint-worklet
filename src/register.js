import { registerWorkletProperties } from './properties.js';

if (CSS.paintWorklet) {
    registerWorkletProperties();
    CSS.paintWorklet.addModule('worklet.js');
}