import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsDisplayArrowDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12.5,19v2h4.5v1H7v-1h4.5v-2H0V4.5c0-1.378,1.121-2.5,2.5-2.5h6.5v1H2.5c-.827,0-1.5.673-1.5,1.5v13.5h22V4.5c0-.827-.673-1.5-1.5-1.5h-6.5v-1h6.5c1.379,0,2.5,1.122,2.5,2.5v14.5h-11.5Zm-4.146-12.439l-.707.707,3.293,3.293c.292.292.677.438,1.061.438s.769-.146,1.061-.438l3.293-3.293-.707-.707-3.146,3.146V0h-1v9.707l-3.146-3.146Z"/>
</svg>

);
