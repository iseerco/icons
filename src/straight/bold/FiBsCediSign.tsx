import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCediSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14,18.94V5.06c1.74,.26,3.26,1.35,4.06,2.97l2.69-1.34c-1.32-2.65-3.85-4.38-6.75-4.66V0h-3V2.01c-4.45,.24-8,3.93-8,8.44v3.09c0,4.51,3.55,8.2,8,8.44v2.01h3v-2.04c2.84-.28,5.36-1.96,6.69-4.54l-2.67-1.38c-.81,1.57-2.31,2.63-4.02,2.89ZM6,13.55v-3.09c0-2.85,2.2-5.2,5-5.43v13.96c-2.8-.23-5-2.58-5-5.43Z"/></svg>

);
