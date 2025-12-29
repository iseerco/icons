import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrMugHot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,9.5H19A3.5,3.5,0,0,0,15.5,6H3.5A3.5,3.5,0,0,0,0,9.5v9A5.506,5.506,0,0,0,5.5,24h8a5.505,5.505,0,0,0,5.118-3.5H20a4,4,0,0,0,4-4v-3A4,4,0,0,0,20,9.5ZM13.5,21h-8A2.5,2.5,0,0,1,3,18.5v-9A.5.5,0,0,1,3.5,9h12a.5.5,0,0,1,.5.5v9A2.5,2.5,0,0,1,13.5,21ZM21,16.5a1,1,0,0,1-1,1H19v-5h1a1,1,0,0,1,1,1ZM8,2.5v-1a1.5,1.5,0,0,1,3,0v1a1.5,1.5,0,0,1-3,0Zm5,0v-1a1.5,1.5,0,0,1,3,0v1a1.5,1.5,0,0,1-3,0ZM3,2.5v-1a1.5,1.5,0,0,1,3,0v1a1.5,1.5,0,0,1-3,0Z"/></svg>

);
