import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FivegLock = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12 17.5v-3c0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5h-1.6c0-.496-.404-.9-.9-.9s-.9.404-.9.9v3c0 .496.404.9.9.9s.9-.404.9-.9v-.4h-.9v-1.6h2.5v2c0 1.381-1.119 2.5-2.5 2.5s-2.5-1.119-2.5-2.5zm-.5 0c0-1.381-1.119-2.5-2.5-2.5h-.4v-1.4h2.5v-1.6h-4.1v4.6h2c.496 0 .9.404.9.9s-.404.9-.9.9h-2v1.6h2c1.381 0 2.5-1.119 2.5-2.5zm10.5-9.5v13c0 1.654-1.346 3-3 3h-14c-1.654 0-3-1.346-3-3v-13h3v-1c0-3.86 3.141-7 7-7s7 3.14 7 7v1zm-15 0h10v-1c0-2.757-2.243-5-5-5s-5 2.243-5 5zm13 2h-16v11c0 .552.448 1 1 1h14c.552 0 1-.448 1-1z"/></svg>
);
