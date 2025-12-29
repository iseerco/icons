import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ReservationTable = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m7.456,22h16.515l-3.075-17.424c-.263-1.493-1.554-2.576-3.07-2.576H6.148c-1.516,0-2.807,1.083-3.07,2.576L.003,22h5.198l-.333-2-1.148-7.553,1.025-5.808,2.711,15.361Zm11.57-5h-8.391l-.353-2h8.391l.353,2Zm-1.059-6l.353,2h-8.391l-.353-2h8.391Zm-.706-4l.353,2h-8.391l-.353-2h8.391Z"/>
</svg>

);
