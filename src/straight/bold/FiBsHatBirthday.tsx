import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsHatBirthday = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12.791,3.836a2,2,0,1,0-1.582,0L0,24.015H24Zm3.262,12.048-2.917,5.131H10.692L14.8,13.628ZM12,8.589l1.085,1.952L7.26,21.015H5.1Z"/></svg>

);
