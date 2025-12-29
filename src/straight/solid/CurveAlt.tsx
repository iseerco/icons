import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CurveAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,24v-2c5.588,0,10.32-4.35,11.007-10.118C11.813,5.108,17.399,0,24,0v2c-5.588,0-10.32,4.35-11.007,10.118-.807,6.773-6.393,11.882-12.993,11.882Z"/>
</svg>

);
