import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Starfighter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,6v8H15.983C15.7-4.73,8.3-4.671,8.017,14H2V6H0V21H2V19.174L7.63,24H10V22h4v2h2.424L22,19.185V21h2V6Zm-8.954-.849a4.379,4.379,0,0,0-2.092,0A8.567,8.567,0,0,1,12,2.093,8.567,8.567,0,0,1,13.046,5.151ZM8,21.683,2,16.54V16H8ZM10,20V15a53.685,53.685,0,0,1,.536-7.473,2.274,2.274,0,0,1,2.928,0A53.685,53.685,0,0,1,14,15v5Zm6,1.724V16h6v.543Z"/></svg>

);
