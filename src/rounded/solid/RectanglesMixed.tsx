import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RectanglesMixed = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m11,11H2c-1.103,0-2-.897-2-2v-3.5C0,3.019,2.019,1,4.5,1h6.5c1.103,0,2,.897,2,2v6c0,1.103-.897,2-2,2Zm8.5,9h-2.5c-1.103,0-2-.897-2-2V5c0-1.103.897-2,2-2h2.5c2.481,0,4.5,2.019,4.5,4.5v8c0,2.481-2.019,4.5-4.5,4.5Zm-8.5,3h-4.5c-2.481,0-4.5-2.019-4.5-4.5v-3.5c0-1.103.897-2,2-2h7c1.103,0,2,.897,2,2v6c0,1.103-.897,2-2,2Z"/>
</svg>

);
