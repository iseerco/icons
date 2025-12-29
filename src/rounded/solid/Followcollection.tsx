import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Followcollection = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M7,11h-3C1.79,11,0,9.21,0,7v-3C0,1.79,1.79,0,4,0h3c2.21,0,4,1.79,4,4v3c0,2.21-1.79,4-4,4Zm13,13h-3c-2.21,0-4-1.79-4-4v-3c0-2.21,1.79-4,4-4h3c2.21,0,4,1.79,4,4v3c0,2.21-1.79,4-4,4Zm-13,0h-3c-2.21,0-4-1.79-4-4v-3c0-2.21,1.79-4,4-4h3c2.21,0,4,1.79,4,4v3c0,2.21-1.79,4-4,4ZM21.25,0c-1.34,0-2.51,1.05-2.76,2.44h0c-.25-1.39-1.4-2.44-2.74-2.44-1.52,0-2.75,1.35-2.75,3.02,0,2.38,3.1,5.21,4.65,6.45,.5,.4,1.21,.4,1.71,0,1.54-1.24,4.65-4.07,4.65-6.45,0-1.67-1.23-3.02-2.75-3.02Z"/></svg>

);
