import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FivegLock = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19 8v-1c0-3.86-3.141-7-7-7s-7 3.14-7 7v1h-3v13c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-13zm-10 12h-2v-1.6h2c.496 0 .9-.404.9-.9s-.404-.9-.9-.9h-2v-4.6h4.1v1.6h-2.5v1.4h.4c1.381 0 2.5 1.119 2.5 2.5s-1.119 2.5-2.5 2.5zm5.5-1.6c.496 0 .9-.404.9-.9v-.4h-.9v-1.6h2.5v2c0 1.381-1.119 2.5-2.5 2.5s-2.5-1.119-2.5-2.5v-3c0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5h-1.6c0-.496-.404-.9-.9-.9s-.9.404-.9.9v3c0 .496.404.9.9.9zm2.5-10.4h-10v-1c0-2.757 2.243-5 5-5s5 2.243 5 5z"/></svg>
);
