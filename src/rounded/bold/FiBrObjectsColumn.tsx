import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrObjectsColumn = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m8.5,0h-3.5C2.243,0,0,2.243,0,5v1.5c0,1.379,1.121,2.5,2.5,2.5h6c1.379,0,2.5-1.121,2.5-2.5V2.5c0-1.379-1.121-2.5-2.5-2.5Zm-.5,6H3v-1c0-1.103.897-2,2-2h3v3Zm13.5,9h-6c-1.379,0-2.5,1.121-2.5,2.5v4c0,1.379,1.121,2.5,2.5,2.5h3.5c2.757,0,5-2.243,5-5v-1.5c0-1.379-1.121-2.5-2.5-2.5Zm-.5,4c0,1.103-.897,2-2,2h-3v-3h5v1ZM19,0h-3.5c-1.379,0-2.5,1.121-2.5,2.5v8c0,1.379,1.121,2.5,2.5,2.5h6c1.379,0,2.5-1.121,2.5-2.5v-5.5c0-2.757-2.243-5-5-5Zm2,10h-5V3h3c1.103,0,2,.897,2,2v5Zm-12.5,1H2.5c-1.379,0-2.5,1.121-2.5,2.5v5.5c0,2.757,2.243,5,5,5h3.5c1.379,0,2.5-1.121,2.5-2.5v-8c0-1.379-1.121-2.5-2.5-2.5Zm-.5,10h-3c-1.103,0-2-.897-2-2v-5h5v7Z"/>
</svg>

);
