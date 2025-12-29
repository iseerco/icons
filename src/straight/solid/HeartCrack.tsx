import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HeartCrack = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.5,1c-1.65,0-3.17,.67-4.32,1.77l2.73,2.73-4.5,4.5,4,4-3.71,3.71-1.41-1.41,2.29-2.29-4-4,4.5-4.5-2.86-2.86c-.98-.98-2.3-1.63-3.69-1.63,0,0-.02,0-.03,0C2.92,1,0,4.14,0,8c0,6.92,10.96,14.6,11.43,14.92l.57,.4,.57-.4c.47-.32,11.43-8,11.43-14.92,0-3.86-2.92-7-6.5-7Z"/></svg>

);
