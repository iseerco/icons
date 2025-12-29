import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Ban = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,2a9.949,9.949,0,0,1,6.324,2.262L4.262,18.324A9.992,9.992,0,0,1,12,2Zm0,20a9.949,9.949,0,0,1-6.324-2.262L19.738,5.676A9.992,9.992,0,0,1,12,22Z"/></g></svg>

);
