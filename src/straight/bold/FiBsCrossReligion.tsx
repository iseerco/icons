import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCrossReligion = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16,24H8V14H2v-4.5c0-1.93,1.57-3.5,3.5-3.5h2.5V3.5c0-1.93,1.57-3.5,3.5-3.5h1c1.93,0,3.5,1.57,3.5,3.5v2.5h2.5c1.93,0,3.5,1.57,3.5,3.5v4.5h-6v10Zm-5-3h2V11h6v-1.5c0-.275-.224-.5-.5-.5h-5.5V3.5c0-.275-.224-.5-.5-.5h-1c-.276,0-.5,.225-.5,.5v5.5H5.5c-.276,0-.5,.225-.5,.5v1.5h6v10Z"/></svg>

);
