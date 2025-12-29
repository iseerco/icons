import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HeartUpsideDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M17.5,23c-2.313,0-4.348-1.317-5.5-3.296-1.152,1.979-3.187,3.296-5.5,3.296-3.584,0-6.5-3.162-6.5-7.05C0,9.175,10.956,1.348,11.422,1.018l.578-.408,.578,.408c.466,.33,11.422,8.157,11.422,14.933,0,3.888-2.916,7.05-6.5,7.05Z"/>
</svg>

);
