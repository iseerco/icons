import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDart = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20.5 0h-5.121l-5.379 5.379v6.121c-2.815 2.044-6.6 4.821-7.112 5.33a3.019 3.019 0 0 0 -.768 2.934l-2.1 2.1 2.121 2.116 2.1-2.1a2.951 2.951 0 0 0 2.937-.77c.509-.509 3.286-4.3 5.33-7.112h6.115l5.377-5.377v-5.121a3.5 3.5 0 0 0 -3.5-3.5zm.5 7.379-3.621 3.621h-2.258l4.44-4.439-2.122-2.122-4.439 4.44v-2.258l3.621-3.621h3.879a.5.5 0 0 1 .5.5z"/></svg>
);
