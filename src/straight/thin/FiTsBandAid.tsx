import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBandAid = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m9,10c0-.552.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1Zm5,1c.552,0,1-.448,1-1s-.448-1-1-1-1,.448-1,1,.448,1,1,1Zm-4,2c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm4,2c.552,0,1-.448,1-1s-.448-1-1-1-1,.448-1,1,.448,1,1,1Zm10-7.5v11.5H0V7.5c0-1.378,1.122-2.5,2.5-2.5h19c1.379,0,2.5,1.122,2.5,2.5Zm-18-1.5v12h12V6H6ZM1,18h4V6h-2.5c-.827,0-1.5.673-1.5,1.5v10.5ZM23,7.5c0-.827-.673-1.5-1.5-1.5h-2.5v12h4V7.5Z"/>
</svg>

);
