import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Airplay = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,4v15h-3.08l-1.638-2h2.718V4c0-.552-.448-1-1-1H3c-.551,0-1,.448-1,1v13h2.717l-1.638,2H0V4C0,2.346,1.346,1,3,1h18c1.654,0,3,1.346,3,3Zm-9.695,10.08l7.308,8.92H2.388l7.302-8.914c.577-.692,1.417-1.086,2.31-1.086h0c.893,0,1.733.394,2.304,1.08Zm3.083,6.92l-4.625-5.646c-.256-.307-.588-.354-.763-.354s-.507.047-.769.359l-4.62,5.641h10.776Z"/>
</svg>

);
