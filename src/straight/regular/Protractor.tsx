import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Protractor = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.977 11.27a11.191 11.191 0 0 0 -10.977-10.27v-1h-5a3 3 0 0 0 -3 3v18a3 3 0 0 0 3 3h5v-1a11.041 11.041 0 0 0 8.027-3.479 10.915 10.915 0 0 0 2.95-8.251zm-4.41 6.883a8.911 8.911 0 0 1 -6.567 2.847h-2v1h-3a1 1 0 0 1 -1-1v-2h2v-2h-2v-2h2v-2h-2v-2h2v-2h-2v-2h2v-2h-2v-2a1 1 0 0 1 1-1h3v1h1.657a9.2 9.2 0 0 1 9.323 8.4 8.925 8.925 0 0 1 -2.413 6.753zm-6.567-11.153h-2v10h2a5 5 0 0 0 0-10zm0 8v-6a3 3 0 0 1 0 6z"/></svg>
);
