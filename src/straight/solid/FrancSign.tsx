import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FrancSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M6,3V11h12v2H6v4h7v2H6v5h-2v-5H0v-2H4V3c0-1.65,1.35-3,3-3h15V2H7c-.55,0-1,.45-1,1Z"/></svg>

);
