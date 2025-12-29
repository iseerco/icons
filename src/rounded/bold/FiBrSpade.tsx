import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrSpade = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,12.3c0-3.965-4.017-7.959-7.516-11a5.341,5.341,0,0,0-6.97,0C5.016,4.343,1,8.337,1,12.3A6.492,6.492,0,0,0,7.25,19a5.4,5.4,0,0,0,3.134-1.011C10.14,19.467,9.424,21,7.5,21h-1a1.5,1.5,0,0,0,0,3h11a1.5,1.5,0,0,0,0-3h-1c-1.713,0-2.514-1.534-2.829-2.973A5.386,5.386,0,0,0,16.75,19,6.492,6.492,0,0,0,23,12.3Zm-9.6.671a1.5,1.5,0,0,0-2.809,0C10.583,13,9.4,16,7.25,16A3.5,3.5,0,0,1,4,12.3C4,9.2,8.878,4.964,10.48,3.572a2.332,2.332,0,0,1,3.038,0C15.121,4.964,20,9.2,20,12.3A3.5,3.5,0,0,1,16.75,16C14.592,16,13.413,13,13.4,12.974Z"/></svg>

);
