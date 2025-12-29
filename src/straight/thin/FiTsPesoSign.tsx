import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsPesoSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,5h-2.43c-1.03-2.91-3.81-5-7.07-5H6.5c-1.38,0-2.5,1.12-2.5,2.5v2.5H2v1h2v3H2v1h2v14h1V15h7.5c3.26,0,6.04-2.09,7.07-5h2.43v-1h-2.15c.1-.48,.15-.99,.15-1.5s-.05-1.02-.15-1.5h2.15v-1ZM5,2.5c0-.83,.67-1.5,1.5-1.5h6c2.7,0,5.02,1.65,6,4H5V2.5Zm7.5,11.5H5v-4h13.5c-.98,2.35-3.3,4-6,4Zm6.5-6.5c0,.52-.06,1.02-.18,1.5H5v-3h13.82c.11,.48,.18,.98,.18,1.5Z"/></svg>

);
