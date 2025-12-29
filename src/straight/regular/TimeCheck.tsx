import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TimeCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16.4 24h-.033a1.876 1.876 0 0 1 -1.345-.6l-3.168-3.262 1.446-1.382 3.105 3.2 6.081-6.082 1.414 1.411-6.161 6.162a1.873 1.873 0 0 1 -1.339.553z"/><path d="m11 6v4.586l-2.707 2.707 1.414 1.414 3.293-3.293v-5.414z"/><path d="m12 0a12 12 0 0 0 -1 23.949v-2a10.007 10.007 0 1 1 10.949-8.949h2c.028-.331.051-.662.051-1a12.013 12.013 0 0 0 -12-12z"/></svg>
);
