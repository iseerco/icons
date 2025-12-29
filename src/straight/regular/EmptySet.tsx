import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const EmptySet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.857,1.557l-1.414-1.414-3.409,3.409c-1.908-1.592-4.36-2.552-7.034-2.552C5.935,1,1,5.935,1,12c0,2.674.961,5.126,2.552,7.034L.143,22.443l1.414,1.414,3.409-3.409c1.908,1.591,4.36,2.552,7.034,2.552,6.065,0,11-4.935,11-11,0-2.673-.961-5.125-2.552-7.034l3.409-3.409ZM3,12C3,7.038,7.038,3,12,3c2.122,0,4.071.742,5.611,1.975l-12.636,12.636c-1.233-1.54-1.975-3.489-1.975-5.611Zm18,0c0,4.963-4.038,9-9,9-2.122,0-4.071-.742-5.611-1.975l12.636-12.636c1.233,1.54,1.975,3.489,1.975,5.611Z"/>
</svg>

);
