import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Leader = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m9.5,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm12.5,20v1.5h-2v-1.5c0-.276-.225-.5-.5-.5H4.5c-.275,0-.5.224-.5.5v1.5h-2v-1.5c0-1.378,1.121-2.5,2.5-2.5h4.5v-10h2v4h4v-5c0-.551-.448-1-1-1h-5.366L1.854,2.263l1.291-1.526,6.221,5.263h4.634c1.654,0,3,1.346,3,3v7h-2v4h4.5c1.379,0,2.5,1.122,2.5,2.5Zm-11-2.5h2v-4h-2v4Z"/>
</svg>

);
