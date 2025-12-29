import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const One = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,24c-.552,0-1-.448-1-1V2.011l-5.215,6.608c-.342,.434-.972,.507-1.405,.166-.434-.342-.507-.971-.166-1.405,0,0,5.343-6.767,5.371-6.794C11.16,.012,12.016-.157,12.766,.152c.75,.311,1.234,1.036,1.234,1.848V23c0,.552-.448,1-1,1Z"/></svg>

);
