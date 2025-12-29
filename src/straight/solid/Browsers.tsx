import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Browsers = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M5,6v-1c0-1.65,1.35-3,3-3h13c1.65,0,3,1.35,3,3v1H5Zm0,2v10H24V8H5Zm-2,12V6c-1.65,0-3,1.35-3,3v13H19v-2H3Z"/></svg>

);
