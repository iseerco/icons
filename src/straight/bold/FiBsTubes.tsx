import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTubes = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,0h-11v3h1v16.5c0,2.481,2.019,4.5,4.5,4.5s4.5-2.019,4.5-4.5V3h1V0Zm-5.5,21c-.827,0-1.5-.673-1.5-1.5v-8.5h3v8.5c0,.827-.673,1.5-1.5,1.5Zm1.5-13h-3V3h3v5Z"/><path d="m11,0H0v3h1v16.5c0,2.481,2.019,4.5,4.5,4.5s4.5-2.019,4.5-4.5V3h1V0Zm-5.5,21c-.827,0-1.5-.673-1.5-1.5v-8.5h3v8.5c0,.827-.673,1.5-1.5,1.5Zm1.5-13h-3V3h3v5Z"/></svg>

);
