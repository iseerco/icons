import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Dropdown2 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M21,4H3c-1.654,0-3,1.346-3,3v13H24V7c0-1.654-1.346-3-3-3Zm1,14H2V7c0-.552,.449-1,1-1H21c.551,0,1,.448,1,1v11Zm-9.455-7h8l-3.191,3.138c-.447,.447-1.172,.447-1.619,0l-3.191-3.138Z"/>
</svg>

);
