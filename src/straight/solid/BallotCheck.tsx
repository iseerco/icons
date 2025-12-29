import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BallotCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19,0H5c-1.654,0-3,1.346-3,3v21h20V3c0-1.654-1.346-3-3-3ZM6,5h2v2h-2v-2Zm1.962,14h-2v-2h2v2Zm-.331-5c-.427,0-.855-.162-1.181-.488l-1.45-1.393,1.386-1.442,1.241,1.192,2.533-2.48,1.399,1.429-2.759,2.702c-.32.32-.744.481-1.168.481Zm10.369,5h-8.038v-2h8.038v2Zm0-6h-6.038l2.042-2h3.996v2Zm0-6h-8v-2h8v2Z"/></svg>

);
