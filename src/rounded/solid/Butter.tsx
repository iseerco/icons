import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Butter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17,15H1V6.5c0-2.485,2.015-4.5,4.5-4.5h7.5c2.206,0,4,1.794,4,4v9Zm1.5-13h-1.04c.954,1.063,1.54,2.462,1.54,4v9h4V6.5c0-2.485-2.015-4.5-4.5-4.5Zm4.5,15H1c-.552,0-1,.447-1,1s.448,1,1,1h.278c.626,1.758,2.308,3,4.222,3h13c1.914,0,3.595-1.242,4.222-3h.278c.553,0,1-.447,1-1s-.447-1-1-1Z"/>
</svg>

);
