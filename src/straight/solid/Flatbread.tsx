import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Flatbread = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm-1.207,4.793l1.414,1.414-6,6-1.414-1.414,6-6Zm-5,12l11-11,1.414,1.414-11,11-1.414-1.414Zm7.414,2.414l-1.414-1.414,6-6,1.414,1.414-6,6Z"/>
</svg>

);
