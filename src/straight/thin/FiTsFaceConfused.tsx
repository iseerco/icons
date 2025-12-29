import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsFaceConfused = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,15h5v1h-5c-2.53,0-4.646,1.854-4.667,1.873l-.666-.746c.097-.087,2.414-2.127,5.333-2.127Zm12-3c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-1,0c0-6.065-4.935-11-11-11S1,5.935,1,12s4.935,11,11,11,11-4.935,11-11Zm-15-1c.552,0,1-.448,1-1s-.448-1-1-1-1,.448-1,1,.448,1,1,1Zm8-2c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Z"/></svg>

);
