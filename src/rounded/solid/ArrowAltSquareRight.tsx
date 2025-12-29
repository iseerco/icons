import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowAltSquareRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm-1.232,12.552l-4.418,4.361c-.498,.492-1.35,.143-1.35-.552v-3.361H7c-.553,0-1-.448-1-1s.447-1,1-1h5v-3.361c0-.695,.852-1.044,1.35-.552l4.418,4.361c.309,.305,.309,.799,0,1.104Z"/></svg>

);
