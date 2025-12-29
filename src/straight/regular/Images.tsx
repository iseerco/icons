import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Images = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.98,18h2.07l-1.54,5.67L.17,18.69,3,8.28v7.63l-.37,1.37,14.48,3.93,.87-3.21ZM10.5,7c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5-1.5,.67-1.5,1.5,.67,1.5,1.5,1.5ZM24,3v13H5V3c0-1.65,1.35-3,3-3h13c1.65,0,3,1.35,3,3ZM7,3V13.67l7.74-7.74,3.3,3.3,3.96-3.96V3c0-.55-.45-1-1-1H8c-.55,0-1,.45-1,1Zm15,11v-5.9l-3.96,3.96-3.3-3.3-5.24,5.24h12.5Z"/></svg>

);
