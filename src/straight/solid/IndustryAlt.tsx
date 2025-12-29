import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const IndustryAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17,11.5v-6.304l-7,5.804v8h-2V2h1V0H0v2h1v19c0,1.654,1.346,3,3,3h17c1.654,0,3-1.346,3-3V5.196l-7,6.304Zm-1,7.5h-3v-3h3v3Zm5,0h-3v-3h3v3Z"/>
</svg>

);
