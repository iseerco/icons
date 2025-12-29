import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Butter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,16h-1V5c0-1.654-1.346-3-3-3H4c-1.654,0-3,1.346-3,3v11H0v2h1v1c0,1.654,1.346,3,3,3h16c1.654,0,3-1.346,3-3v-1h1v-2Zm-3-11v11h-3V5c0-.351-.061-.687-.172-1h2.172c.552,0,1,.448,1,1Zm-18,0c0-.552.448-1,1-1h11c.552,0,1,.448,1,1v11H3V5Zm18,14c0,.552-.448,1-1,1H4c-.552,0-1-.448-1-1v-1h18v1Z"/>
</svg>

);
