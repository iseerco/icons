import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrAddFolder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16.5 14a1.5 1.5 0 0 1 -1.5 1.5h-1.5v1.5a1.5 1.5 0 0 1 -3 0v-1.5h-1.5a1.5 1.5 0 0 1 0-3h1.5v-1.5a1.5 1.5 0 0 1 3 0v1.5h1.5a1.5 1.5 0 0 1 1.5 1.5zm7.5-5.5v9a5.506 5.506 0 0 1 -5.5 5.5h-13a5.506 5.506 0 0 1 -5.5-5.5v-11a5.506 5.506 0 0 1 5.5-5.5h2.5a1.5 1.5 0 0 1 .671.158l3.683 1.842h6.146a5.506 5.506 0 0 1 5.5 5.5zm-3 0a2.5 2.5 0 0 0 -.051-.5h-17.949v9.5a2.5 2.5 0 0 0 2.5 2.5h13a2.5 2.5 0 0 0 2.5-2.5z"/></svg>
);
