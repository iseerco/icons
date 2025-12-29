import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCheckInCalendar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.5,2h-3.5V0h-1v2H7V0h-1v2h-3.5c-1.378,0-2.5,1.122-2.5,2.5v9.5h1v-5h22v14H1v-4H0v5h24V4.5c0-1.378-1.122-2.5-2.5-2.5ZM1,8v-3.5c0-.827.673-1.5,1.5-1.5h19c.827,0,1.5.673,1.5,1.5v3.5H1Zm8.68,9H0v-1h9.679l-2.646-2.646.707-.707,2.84,2.84c.271.271.42.63.42,1.014s-.149.743-.42,1.014l-2.84,2.839-.707-.707,2.646-2.646Z"/>
</svg>

);
