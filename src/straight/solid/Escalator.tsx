import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Escalator = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m8.5,0C9.881,0,11,1.119,11,2.5s-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5S7.119,0,8.5,0Zm.264,22.817l11.603-9.817h3.634v-7h-5.535c-1.181,0-2.328.42-3.229,1.183L3.634,17H0v7h5.535c1.181,0,2.328-.42,3.229-1.183Zm2.887-15.22c-.504-.949-1.503-1.597-2.651-1.597h-1c-1.654,0-3,1.346-3,2.997l-.014,4.239,6.664-5.639Z"/></svg>

);
