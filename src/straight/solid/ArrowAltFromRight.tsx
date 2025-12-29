import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowAltFromRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,3V11H6V6L.445,11.083c-.593,.532-.593,1.461,0,1.993l5.555,5.083v-5.159H22v8h2V3h-2Z"/></svg>

);
