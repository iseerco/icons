import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsFilterList = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m14.221,13h9.779v1h-10.636l.857-1Zm2.572-3l-.857,1h8.065v-1h-7.207Zm.207-3.315l-6,7v8.315l-5-3.75v-4.565L0,6.685v-2.185c0-1.378,1.122-2.5,2.5-2.5h12c1.378,0,2.5,1.122,2.5,2.5v2.185Zm-1-2.185c0-.827-.673-1.5-1.5-1.5H2.5c-.827,0-1.5.673-1.5,1.5v1.815l6,7v4.435l3,2.25v-6.685l6-7v-1.815Zm-3,15.5h11v-1h-11v1Zm0-3h11v-1h-11v1Z"/>
</svg>

);
