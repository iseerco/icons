import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Inboxes = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,24H3c-1.65,0-3-1.35-3-3V13H8v2c0,1.1,.9,2,2,2h4c1.1,0,2-.9,2-2v-2h8v8c0,1.65-1.35,3-3,3Zm0-13H3c-1.65,0-3-1.35-3-3V0H8V2c0,1.1,.9,2,2,2h4c1.1,0,2-.9,2-2V0h8V8c0,1.65-1.35,3-3,3Z"/></svg>

);
