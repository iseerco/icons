import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsVideoFolder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12 13v1.643l3-2.143v7l-3-2.143v1.643h-7v-6zm2-13v10.919l9.708-5.459zm7 9.277v11.723h-18v-12h9v-5.177l-3.646-1.823h-4.854c-1.93 0-3.5 1.57-3.5 3.5v18.5h24v-16.41z"/></svg>
);
