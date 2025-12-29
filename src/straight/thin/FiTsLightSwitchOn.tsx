import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsLightSwitchOn = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.5,0H4.5c-1.378,0-2.5,1.122-2.5,2.5V24H22V2.5c0-1.378-1.122-2.5-2.5-2.5Zm1.5,23H3V2.5c0-.827,.673-1.5,1.5-1.5h15c.827,0,1.5,.673,1.5,1.5V23Zm-14-4.5c0,.827,.673,1.5,1.5,1.5h7c.827,0,1.5-.673,1.5-1.5V4H7v14.5Zm8.5,.5h-7c-.276,0-.5-.224-.5-.5v-.5h8v.5c0,.276-.224,.5-.5,.5Zm-7.5-2v-5h8v5H8ZM16,5v6H8V5h8Z"/></svg>

);
