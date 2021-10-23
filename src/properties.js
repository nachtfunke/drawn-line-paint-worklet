export const registerWorkletProperties = () => {
    CSS.registerProperty({
        name: '--drawn-line-color',
        syntax: '<color>',
        inherits: false,
        initialValue: 'black'
    });
    CSS.registerProperty({
        name: '--drawn-line-strength',
        syntax: '<length>',
        inherits: false,
        initialValue: '2px'
    });
    CSS.registerProperty({
        name: '--drawn-line-curve-range',
        syntax: '<length>',
        inherits: false,
        initialValue: '1px'
    });
    CSS.registerProperty({
        name: '--drawn-line-segment-size',
        syntax: '<length>',
        inherits: false,
        initialValue: '12px'
    });
    CSS.registerProperty({
        name: '--drawn-line-wiggle',
        syntax: '<integer>',
        inherits: false,
        initialValue: '1'
    });
}