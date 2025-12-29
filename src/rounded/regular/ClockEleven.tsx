import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ClockEleven = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12Zm0-22C6.486,2,2,6.486,2,12s4.486,10,10,10,10-4.486,10-10S17.514,2,12,2Zm.322,10.947c.405-.138,.678-.519,.678-.947V6c0-.552-.448-1-1-1s-1,.448-1,1v3.057l-.644-.838c-.336-.438-.965-.52-1.402-.184-.438,.336-.52,.964-.184,1.402l2.437,3.172c.193,.251,.488,.391,.793,.391,.107,0,.216-.017,.322-.053Z"/></svg>

);
