import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FitnessWatch = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M7,2c-.342,0-.677,.035-1,.101V0h12V2.101c-.323-.066-.658-.101-1-.101H7Zm0,20c-.342,0-.677-.035-1-.101v2.101h12v-2.101c-.323,.066-.658,.101-1,.101H7ZM20,7v10c0,1.654-1.346,3-3,3H7c-1.654,0-3-1.346-3-3V7c0-1.654,1.346-3,3-3h10c1.654,0,3,1.346,3,3Zm-4,4.2c0-1.215-.895-2.2-2-2.2s-2,.985-2,2.2c0-1.215-.895-2.2-2-2.2s-2,.985-2,2.2c0,2.304,4,5,4,5,0,0,4-2.696,4-5Z"/>
</svg>

);
