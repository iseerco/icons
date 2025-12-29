import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Dollar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M19,8V7.068A5.073,5.073,0,0,0,13.932,2H13V0H11V2h-.932a5.068,5.068,0,0,0-1.6,9.875L11,12.72V20h-.932A3.071,3.071,0,0,1,7,16.932V16H5v.932A5.073,5.073,0,0,0,10.068,22H11v2h2V22h.932a5.068,5.068,0,0,0,1.6-9.875L13,11.28V4h.932A3.071,3.071,0,0,1,17,7.068V8Zm-4.1,6.021A3.068,3.068,0,0,1,13.932,20H13V13.387ZM11,10.613,9.1,9.979A3.068,3.068,0,0,1,10.068,4H11Z"/></g></svg>

);
