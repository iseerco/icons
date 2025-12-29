import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CakeBirthday = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M2,13V12A3,3,0,0,1,5,9h6V6.816A3,3,0,0,1,9,4C9,2.534,10.813.946,11.369.494L12-.019l.631.513C13.187.946,15,2.534,15,4a3,3,0,0,1-2,2.816V9h6a3,3,0,0,1,3,3v1c0,.343-.682,1-1.75,1-1.089,0-1.75-.694-1.75-1h-2c0,.343-.682,1-1.75,1C13.661,14,13,13.306,13,13H11c0,.343-.682,1-1.75,1-1.089,0-1.75-.694-1.75-1h-2c0,.343-.682,1-1.75,1C2.661,14,2,13.306,2,13ZM0,22v2H24V22Zm22-6.375A4.359,4.359,0,0,1,20.25,16a4.194,4.194,0,0,1-2.75-1,4.309,4.309,0,0,1-5.5.015A4.309,4.309,0,0,1,6.5,15a4.194,4.194,0,0,1-2.75,1A4.359,4.359,0,0,1,2,15.625V20H22Z"/></svg>

);
