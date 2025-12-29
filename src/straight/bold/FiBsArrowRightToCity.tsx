import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowRightToCity = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M11,15h3v3h-3v-3Zm3-10h-3v3h3v-3Zm-3,8h3v-3h-3v3ZM20.5,5h-1.5v-1.5c0-1.93-1.57-3.5-3.5-3.5h-6c-1.93,0-3.5,1.57-3.5,3.5V7.661l3,3.07V3.5c0-.276,.225-.5,.5-.5h6c.275,0,.5,.224,.5,.5v4.5h4.5c.275,0,.5,.224,.5,.5v12.5H9v-4.732l-3,3.07v4.662H24V8.5c0-1.93-1.57-3.5-3.5-3.5Zm-4.5,13h3v-3h-3v3Zm3-8h-3v3h3v-3Zm-10.705,4.128c.347-.347,.347-.91,0-1.257l-3.295-3.371v2.5H0v3H5v2.5l3.295-3.372Z"/>
</svg>

);
