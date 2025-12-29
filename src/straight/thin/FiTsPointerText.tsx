import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsPointerText = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M12.5,3.5V20.5c0,1.379,1.121,2.5,2.5,2.5h3v1h-3c-1.28,0-2.39-.698-3-1.726-.61,1.028-1.72,1.726-3,1.726h-3v-1h3c1.379,0,2.5-1.121,2.5-2.5V3.5c0-1.379-1.121-2.5-2.5-2.5h-3V0h3c1.28,0,2.39,.698,3,1.726,.61-1.028,1.72-1.726,3-1.726h3V1h-3c-1.379,0-2.5,1.121-2.5,2.5Z"/>
</svg>

);
