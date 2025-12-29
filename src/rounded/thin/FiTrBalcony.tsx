import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrBalcony = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M23.5,9c0-.552-.448-1-1-1s-1,.448-1,1c0,.366,.206,.673,.5,.847v1.153h-3V4c0-2.206-1.794-4-4-4h-6c-2.206,0-4,1.794-4,4v7H2v-1.153c.294-.174,.5-.481,.5-.847,0-.552-.448-1-1-1s-1,.448-1,1c0,.366,.206,.673,.5,.847v10.153c0,2.206,1.794,4,4,4h14c2.206,0,4-1.794,4-4V9.847c.294-.174,.5-.481,.5-.847ZM6,4c0-1.654,1.346-3,3-3h6c1.654,0,3,1.346,3,3v7H6V4Zm4,8v11h-2V12h2Zm1,0h2v11h-2V12Zm3,0h2v11h-2V12ZM2,20V12h2v10.816c-1.161-.414-2-1.514-2-2.816Zm3-8h2v11h-2V12Zm12,11V12h2v11h-2Zm3-.184V12h2v8c0,1.302-.839,2.402-2,2.816Z"/>
</svg>

);
