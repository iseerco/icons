import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SadTear = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12.013,12.013,0,0,0,0,12c.6,15.9,23.4,15.893,24,0A12.013,12.013,0,0,0,12,0Zm3.5,8a1.5,1.5,0,0,1,0,3A1.5,1.5,0,0,1,15.5,8ZM8,18a2,2,0,0,1-2-2c0-1.59,2-3.6,2-3.6s2,1.969,2,3.6A2,2,0,0,1,8,18Zm.5-7a1.5,1.5,0,0,1,0-3A1.5,1.5,0,0,1,8.5,11Zm7.836,6.747A7.517,7.517,0,0,0,12,16a5,5,0,0,0-.457-1.962c2.834-.409,6.172,2.151,6.123,2.216Z"/></svg>

);
