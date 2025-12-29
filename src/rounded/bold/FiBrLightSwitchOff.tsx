import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrLightSwitchOff = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.5,0H7.5C4.467,0,2,2.467,2,5.5v13c0,3.033,2.467,5.5,5.5,5.5h9c3.033,0,5.5-2.467,5.5-5.5V5.5c0-3.033-2.467-5.5-5.5-5.5Zm2.5,18.5c0,1.378-1.122,2.5-2.5,2.5H7.5c-1.378,0-2.5-1.122-2.5-2.5V5.5c0-1.378,1.122-2.5,2.5-2.5h9c1.378,0,2.5,1.122,2.5,2.5v13ZM14,5h-4c-1.654,0-3,1.346-3,3v8.5c0,1.378,1.122,2.5,2.5,2.5h5c1.378,0,2.5-1.122,2.5-2.5V8c0-1.654-1.346-3-3-3Zm-4,11v-4h4v4h-4Z"/></svg>

);
