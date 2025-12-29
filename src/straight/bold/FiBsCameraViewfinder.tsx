import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCameraViewfinder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m3,21h5v3H2.5c-1.379,0-2.5-1.121-2.5-2.5v-5.5h3v5Zm18,0h-5v3h5.5c1.379,0,2.5-1.121,2.5-2.5v-5.5h-3v5Zm.5-21h-5.5v3h5v5h3V2.5c0-1.379-1.121-2.5-2.5-2.5ZM3,3h5V0H2.5C1.121,0,0,1.121,0,2.5v5.5h3V3Zm9,7c-1.105,0-2,.895-2,2s.895,2,2,2,2-.895,2-2-.895-2-2-2Zm-3.5-4h.196l1.33-2h3.947l1.33,2h.196c1.93,0,3.5,1.57,3.5,3.5v8.5H5v-8.5c0-1.93,1.57-3.5,3.5-3.5Zm7,3h-7c-.275,0-.5.225-.5.5v5.5h8v-5.5c0-.275-.225-.5-.5-.5Z"/>
</svg>

);
