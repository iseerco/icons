import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HandBackPointDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,5v4.721c0,2.383-1.682,4.435-4.019,4.903h0s-4.981,1.196-4.981,1.196v5.681c0,1.381-1.119,2.5-2.5,2.5h0c-1.381,0-2.5-1.119-2.5-2.5V7c0-.552-.448-1-1-1s-1,.448-1,1v7.34l-2.788-3.64c-1.696-1.985-1.588-4.938,.249-6.794L5.86,1.481C6.802,.536,8.08,.004,9.414,0h7.586C19.761,0,22,2.239,22,5Z"/></svg>

);
