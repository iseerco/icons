import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowLeftToArc = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,12.5h-15.75l6.105,6.147-.71.705-6.177-6.221c-.623-.624-.623-1.64.001-2.265l6.176-6.22.71.705-6.104,6.147h15.75v1Zm-23-.5C1,5.935,5.935,1,12,1V0C5.383,0,0,5.383,0,12s5.383,12,12,12v-1c-6.065,0-11-4.935-11-11Z"/>
</svg>

);
