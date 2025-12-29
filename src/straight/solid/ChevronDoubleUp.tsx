import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChevronDoubleUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name=" 01 align center"><path d="M12.713,3.119l9.893,9.892L24.019,11.6,14.127,1.705a3,3,0,0,0-4.242,0L0,11.59,1.414,13,11.3,3.12A1,1,0,0,1,12.713,3.119Z"/><path d="M22.589,23l1.417-1.417-11.29-11.29a1,1,0,0,0-1.414,0L.006,21.582,1.422,23,12.006,12.412Z"/></g></svg>

);
