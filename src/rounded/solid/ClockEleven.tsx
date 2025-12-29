import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ClockEleven = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm1,12c0,.428-.273,.809-.678,.947-.105,.036-.214,.053-.322,.053-.305,0-.6-.14-.793-.391l-2.437-3.172c-.336-.438-.254-1.066,.184-1.402,.438-.336,1.066-.254,1.402,.184l.644,.838v-3.057c0-.552,.448-1,1-1s1,.448,1,1v6Z"/></svg>

);
