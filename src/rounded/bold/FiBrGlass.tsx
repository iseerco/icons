import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrGlass = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.44,1.552A4.494,4.494,0,0,0,18.041,0H5.959A4.5,4.5,0,0,0,1.5,5.136L3.77,21a3.517,3.517,0,0,0,3.464,3h9.532a3.517,3.517,0,0,0,3.464-3L22.5,5.137A4.5,4.5,0,0,0,21.44,1.552Zm-1.914,3.16L17.26,20.571a.5.5,0,0,1-.494.429H7.234a.5.5,0,0,1-.494-.429L5.372,11H15.5a1.5,1.5,0,0,0,0-3H4.944l-.47-3.288A1.5,1.5,0,0,1,5.959,3H18.041a1.5,1.5,0,0,1,1.485,1.712Z"/></svg>

);
