import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HockeySticks = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9.269,24H5.5A5.5,5.5,0,0,1,.025,17.963,5.65,5.65,0,0,1,5.693,13h6.538a3.978,3.978,0,0,0,3.827-2.838L18.63,1.569A2.234,2.234,0,0,1,21.46.1h0A2.233,2.233,0,0,1,22.9,2.877l-4.065,14.03A9.942,9.942,0,0,1,9.269,24ZM20.254-.312h0Zm1.474,14.426-.97,3.35A11.993,11.993,0,0,1,15.929,24H18.5a5.5,5.5,0,0,0,5.475-6.037A5.425,5.425,0,0,0,21.728,14.114ZM3.54,11.305A7.768,7.768,0,0,1,5.693,11H8.3a4.022,4.022,0,0,1-.361-.838L5.37,1.569A2.234,2.234,0,0,0,1.1,2.877Z"/></svg>

);
