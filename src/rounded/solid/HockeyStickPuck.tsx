import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HockeyStickPuck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.461.112c-.49-.254-1.095-.064-1.349.427l-8.543,16.46H3.5c-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5h5.044c2.249,0,4.29-1.24,5.326-3.236L23.888,1.46c.254-.49.063-1.094-.427-1.348Zm.539,22.888c0,.553-.447,1-1,1h-4c-.553,0-1-.447-1-1s.447-1,1-1h4c.553,0,1,.447,1,1Z"/>
</svg>

);
