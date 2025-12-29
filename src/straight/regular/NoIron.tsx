import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const NoIron = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M15.758,20l2,2H0v-2.5c0-4.121,2.392-7.685,5.855-9.403l1.51,1.51c-3.138,1.251-5.365,4.315-5.365,7.893v.5H15.758Zm8.261,2.481l-1.476,1.476L.043,1.457,1.457,.043,10.414,9h11.586v-1c0-2.206-1.794-4-4-4H8V2h10c3.309,0,6,2.691,6,6l.019,14.481Zm-2.019-11.481H12.414l9,9h.586V11Z"/>
</svg>

);
