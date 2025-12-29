import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WineBottle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m9.01,2.004V.005h6v1.999h-6Zm10.219,7.778l-4.219-2.813v-2.965h-6v2.965l-4.219,2.813c-1.086.724-1.741,1.924-1.775,3.224h13.994v2H3.01v9h18v-10.896c0-1.341-.666-2.585-1.781-3.328Z"/></svg>

);
