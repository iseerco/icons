import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ClockOne = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm3.229,9.438l-2.437,3.172c-.193,.251-.488,.391-.793,.391-.107,0-.216-.017-.321-.053-.406-.138-.679-.519-.679-.947V6c0-.552,.447-1,1-1s1,.448,1,1v3.057l.644-.838c.337-.437,.963-.521,1.402-.184,.438,.336,.521,.964,.184,1.402Z"/></svg>

);
