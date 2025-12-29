import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrGrate = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18.5,0H5.5C2.468,0,0,2.468,0,5.5v13c0,3.032,2.468,5.5,5.5,5.5h13c3.032,0,5.5-2.468,5.5-5.5V5.5c0-3.032-2.468-5.5-5.5-5.5Zm2.5,5.5v5h-4V3h1.5c1.379,0,2.5,1.121,2.5,2.5Zm-11,5V3h4v7.5h-4Zm4,3v7.5h-4v-7.5h4ZM5.5,3h1.5v7.5H3v-5c0-1.379,1.121-2.5,2.5-2.5Zm-2.5,15.5v-5h4v7.5h-1.5c-1.379,0-2.5-1.121-2.5-2.5Zm15.5,2.5h-1.5v-7.5h4v5c0,1.379-1.121,2.5-2.5,2.5Z"/>
</svg>

);
