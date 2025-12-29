import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SecurityGate = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17 0h-10c-2.757 0-5 2.243-5 5v18c0 .552.448 1 1 1s1-.448 1-1v-17h16v17c0 .552.448 1 1 1s1-.448 1-1v-18c0-2.757-2.243-5-5-5zm-5 11c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm.5 1h-1c-1.93 0-3.5 1.57-3.5 3.5v2c0 .955.387 1.821 1.009 2.453 0 .016-.009.03-.009.047v3c0 .552.448 1 1 1s1-.448 1-1v-2.051c.165.024.329.051.5.051h1c.171 0 .335-.027.5-.051v2.051c0 .552.448 1 1 1s1-.448 1-1v-3c0-.017-.009-.03-.009-.047.623-.632 1.009-1.498 1.009-2.453v-2c0-1.93-1.57-3.5-3.5-3.5z"/></svg>
);
