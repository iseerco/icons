import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrFork = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.553,7.431a1.5,1.5,0,0,0-2.122.016l-4.492,4.564a3.5,3.5,0,0,1-3.641.812L20.56,5.56a1.5,1.5,0,0,0-2.121-2.121L11.177,10.7a3.487,3.487,0,0,1,.8-3.633l4.572-4.5A1.5,1.5,0,0,0,14.447.43L9.868,4.939a6.507,6.507,0,0,0-.932,8l-8.5,8.5a1.5,1.5,0,0,0,2.121,2.121l8.5-8.5a6.5,6.5,0,0,0,8.012-.94l4.5-4.571A1.5,1.5,0,0,0,23.553,7.431Z"/></svg>

);
