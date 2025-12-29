import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrLightSwitch = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.5,0H7.5C4.468,0,2,2.468,2,5.5v13c0,3.032,2.468,5.5,5.5,5.5h9c3.032,0,5.5-2.468,5.5-5.5V5.5c0-3.032-2.468-5.5-5.5-5.5Zm2.5,18.5c0,1.379-1.121,2.5-2.5,2.5H7.5c-1.379,0-2.5-1.121-2.5-2.5V5.5c0-1.379,1.121-2.5,2.5-2.5h9c1.379,0,2.5,1.121,2.5,2.5v13ZM14.5,5h-5c-1.379,0-2.5,1.121-2.5,2.5v9c0,1.379,1.121,2.5,2.5,2.5h5c1.379,0,2.5-1.121,2.5-2.5V7.5c0-1.379-1.121-2.5-2.5-2.5Zm-.5,3v2.5h-4v-2.5h4Zm-4,8v-2.5h4v2.5h-4Z"/></svg>

);
