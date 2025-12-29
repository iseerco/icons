import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsDigitalPayment = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M22,3h-6V0H0V21.5c0,1.378,1.121,2.5,2.5,2.5H13.5c1.379,0,2.5-1.122,2.5-2.5v-5.5h8V5c0-1.103-.897-2-2-2Zm-7,18.5c0,.827-.673,1.5-1.5,1.5H2.5c-.827,0-1.5-.673-1.5-1.5v-3.5H15v3.5Zm0-4.5H1V1H15V17Zm8-2h-7v-7h7v7Zm0-8h-7v-3h6c.552,0,1,.449,1,1v2ZM6.247,11.561l-2.851-2.765,.695-.718,2.856,2.771c.202,.2,.519,.2,.713,.005l4.791-4.833,.711,.704-4.793,4.834c-.285,.285-.662,.441-1.062,.441s-.777-.156-1.061-.439Zm3.753,9.439H6v-1h4v1Z"/>
</svg>

);
