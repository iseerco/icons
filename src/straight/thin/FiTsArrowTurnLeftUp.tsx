import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowTurnLeftUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M22,23v1H10.5c-1.378,0-2.5-1.122-2.5-2.5V1.25L1.353,7.854l-.705-.709L7.368,.468c.624-.625,1.64-.624,2.265,0l6.72,6.676-.705,.709L9,1.25V21.5c0,.827,.673,1.5,1.5,1.5h11.5Z"/>
</svg>

);
