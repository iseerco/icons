import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowLeftToArc = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,13.5h-12.35l3.415,3.443-2.13,2.113-5.177-5.221c-1.009-1.011-1.009-2.661.004-3.676l5.173-5.217,2.13,2.113-3.415,3.443h12.35v3Zm-21-1.5C3,7.037,7.038,3,12,3V0C5.383,0,0,5.383,0,12s5.383,12,12,12v-3c-4.962,0-9-4.037-9-9Z"/>
</svg>

);
