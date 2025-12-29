import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowLeftFromArc = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m4.65,13.5l3.415,3.443-2.13,2.113L.758,13.836c-1.009-1.011-1.009-2.661.004-3.676l5.173-5.217,2.13,2.113-3.415,3.443h12.35v3H4.65ZM12,0v3c4.962,0,9,4.037,9,9s-4.038,9-9,9v3c6.617,0,12-5.383,12-12S18.617,0,12,0Z"/>
</svg>

);
