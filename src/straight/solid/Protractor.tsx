import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Protractor = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.977 11.27a11.191 11.191 0 0 0 -10.977-10.27v-1h-5a3 3 0 0 0 -3 3v2h3v2h-3v2h3v2h-3v2h3v2h-3v2h3v2h-3v2a3 3 0 0 0 3 3h5v-1a11.041 11.041 0 0 0 8.027-3.479 10.915 10.915 0 0 0 2.95-8.251zm-10.977 4.73h-1v-8h1a4 4 0 0 1 0 8z"/></svg>
);
