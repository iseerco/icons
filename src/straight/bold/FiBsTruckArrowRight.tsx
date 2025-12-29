import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTruckArrowRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,10.5c0-3.033-2.468-5.5-5.5-5.5h-1.5v-.5c0-1.93-1.57-3.5-3.5-3.5H3.5C1.57,1,0,2.57,0,4.5v2.5h3v-2.5c0-.276.224-.5.5-.5h10c.275,0,.5.224.5.5v12.5H3v-3H0v6h3.061c-.034.162-.061.327-.061.5,0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5c0-.173-.027-.338-.061-.5h8.122c-.034.162-.061.327-.061.5,0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5c0-.173-.027-.338-.061-.5h3.061v-9.5Zm-5.5-2.5c1.379,0,2.5,1.122,2.5,2.5v2.5h-4v-5h1.5Zm-11.5,4H0v-3h7v-3l3.707,3.793c.39.391.39,1.024,0,1.414l-3.707,3.793v-3Z"/>
</svg>

);
