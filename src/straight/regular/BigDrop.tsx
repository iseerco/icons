import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BigDrop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,11v-2h-1.99l-.006-3.007c-.003-1.65-1.35-2.993-3-2.993h-4.004L12,0l-3,3H5c-1.654,0-3,1.346-3,3v3H0v2H8v11h-3v2h14v-2h-3V11h8Zm-10,11h-4V11h4v11Zm-1-13v-2h-2v2h-3v-2h-2v2h-2v-3c0-.551,.449-1,1-1h14.004c.55,0,.999,.448,1,.998l.006,3.002h-2.01v-2h-2v2h-3Z"/>
</svg>

);
