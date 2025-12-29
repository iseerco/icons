import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsListMusic = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20,0c-1.103,0-2,.897-2,2v13.342c-.996-1.415-2.642-2.342-4.5-2.342-3.032,0-5.5,2.467-5.5,5.5s2.468,5.5,5.5,5.5,5.5-2.467,5.5-5.5V2c0-.551.448-1,1-1h4V0h-4Zm-6.5,23c-2.481,0-4.5-2.019-4.5-4.5s2.019-4.5,4.5-4.5,4.5,2.019,4.5,4.5-2.019,4.5-4.5,4.5Zm-.5-22H0V0h13v1Zm0,6H0v-1h13v1Zm-4.587,6H0v-1h9.769c-.49.282-.944.618-1.356,1Z"/>
</svg>

);
