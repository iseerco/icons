import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BrowserUi = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,8v-4c0-1.654-1.346-3-3-3H3C1.346,1,0,2.346,0,4v4h24ZM7.5,3c.828,0,1.5.672,1.5,1.5s-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5.672-1.5,1.5-1.5Zm-4,0c.828,0,1.5.672,1.5,1.5s-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5.672-1.5,1.5-1.5ZM0,10v13h24v-13H0Zm13,7c0,1.654-1.346,3-3,3s-3-1.346-3-3v-4h2v4c0,.551.449,1,1,1s1-.449,1-1v-4h2v4Zm4,3h-2v-7h2v7Z"/>
</svg>

);
