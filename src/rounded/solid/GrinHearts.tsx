import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GrinHearts = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12.013,12.013,0,0,0,0,12c.6,15.9,23.4,15.893,24,0A12.013,12.013,0,0,0,12,0ZM6.5,7A1.581,1.581,0,0,1,8,8.65c.41-3.617,6.167-.78.465,3.494a.743.743,0,0,1-.93,0C6.692,11.468,5,9.948,5,8.65A1.581,1.581,0,0,1,6.5,7Zm11.342,8.542A6.827,6.827,0,0,1,12,19a6.836,6.836,0,0,1-5.848-3.458A1,1,0,0,1,7.2,14.024,15.4,15.4,0,0,0,12,15a15.4,15.4,0,0,0,4.792-.976A1,1,0,0,1,17.842,15.542Zm-1.377-3.4a.743.743,0,0,1-.93,0c-5.7-4.279.059-7.109.465-3.494C16.41,5.033,22.167,7.87,16.465,12.144Z"/></svg>

);
