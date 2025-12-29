import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BorderAll = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,0H5C2.24,0,0,2.24,0,5v14c0,2.76,2.24,5,5,5h14c2.76,0,5-2.24,5-5V5c0-2.76-2.24-5-5-5Zm3,5v6H13V2h6c1.65,0,3,1.35,3,3ZM5,2h6V11H2V5c0-1.65,1.35-3,3-3ZM2,19v-6H11v9H5c-1.65,0-3-1.35-3-3Zm17,3h-6V13h9v6c0,1.65-1.35,3-3,3Z"/></svg>

);
