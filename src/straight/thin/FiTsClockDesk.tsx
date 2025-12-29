import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsClockDesk = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m7.257,13.429l-.514-.857,4.757-2.854v-5.717h1v6.283l-5.243,3.146Zm14.743-3.957v14.528H2v-14.528h.014C2.289,4.202,6.663,0,12,0s9.711,4.202,9.986,9.472h.014Zm-19,.528c0,4.962,4.037,9,9,9s9-4.038,9-9S16.963,1,12,1,3,5.038,3,10Zm18,4.356c-1.622,3.338-5.047,5.644-9,5.644s-7.378-2.306-9-5.644v8.644h18v-8.644Z"/>
</svg>

);
