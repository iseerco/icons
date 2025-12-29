import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTowerControl = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.319,6.098c-.571-.697-1.417-1.098-2.319-1.098h-4V2h-3.5V0h-3V2h-3.501v3H3.001c-.902,0-1.748,.4-2.319,1.098C.109,6.796-.117,7.703,.06,8.588l1.882,9.412H7v6h10v-6h5.06l1.882-9.412c.177-.885-.05-1.792-.622-2.49Zm-3.119,5.902h-3.2v-4h4l-.8,4Zm-6.2-4v4h-4v-4h4Zm-7,0v4H3.801l-.8-4h3.999Zm7,13h-4.001v-3h4.002v3Z"/></svg>

);
