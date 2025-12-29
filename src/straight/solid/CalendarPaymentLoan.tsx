import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CalendarPaymentLoan = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,21.014c0,1.649-1.343,2.986-3,2.986h-6c-1.657,0-3-1.337-3-2.986,0-2.871,2.273-5.752,4.84-6.452-.706-.667-1.472-1.608-1.472-2.562h5.263c0,.954-.766,1.896-1.472,2.562,2.567.699,4.84,3.581,4.84,6.452Zm0-16.014c0-1.654-1.346-3-3-3h-3V0h-2v2h-8V0h-2v2h-3c-1.654,0-3,1.346-3,3v3h24v-3Zm-14,16.014c0-2.736,1.572-5.521,3.814-7.155-.297-.618-.446-1.238-.446-1.858v-2H0v14h11.021c-.632-.835-1.021-1.862-1.021-2.986Z"/>
</svg>

);
