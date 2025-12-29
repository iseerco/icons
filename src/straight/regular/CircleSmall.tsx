import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleSmall = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M12,19a7,7,0,1,1,7-7A7.008,7.008,0,0,1,12,19ZM12,7a5,5,0,1,0,5,5A5.006,5.006,0,0,0,12,7Z"/></g></svg>

);
