import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBottle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.429,9.179l-3.429-1.371V1h1V0H8V1h1V7.662l-3.428,1.371c-.955,.382-1.572,1.293-1.572,2.321v12.646H20V11.5c0-1.028-.616-1.939-1.571-2.321Zm.571,13.821H5V11.354c0-.617,.37-1.164,.943-1.393l4.057-1.623V1h4v7.484l4.058,1.623c.572,.229,.942,.776,.942,1.393v11.5Zm-11-4h8v-5H8v5Zm1-4h6v3h-6v-3Z"/></svg>

);
