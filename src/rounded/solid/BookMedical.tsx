import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BookMedical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m4.395,16.061c-.87.104-1.696.437-2.395.964V5c0-2.376,1.672-4.425,4-4.9v15.9h-1c-.203,0-.406.02-.605.061Zm-2.395,4.939c0,1.657,1.343,3,3,3h12c2.761,0,5-2.239,5-5v-1H5c-1.657,0-3,1.343-3,3ZM22,5v11h-14V0h9c2.761,0,5,2.239,5,5Zm-3,4c0-.552-.447-1-1-1h-2v-2c0-.552-.447-1-1-1s-1,.448-1,1v2h-2c-.553,0-1,.448-1,1s.447,1,1,1h2v2c0,.552.447,1,1,1s1-.448,1-1v-2h2c.553,0,1-.448,1-1Z"/></svg>

);
