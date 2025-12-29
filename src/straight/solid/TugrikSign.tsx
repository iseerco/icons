import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TugrikSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,2v6.89l7-2.33v2.11l-7,2.33v2.33l7-2.33v2.11l-7,2.33v8.56h-2v-7.89l-7,2.33v-2.11l7-2.33v-2.33l-7,2.33v-2.11l7-2.33V2H2V0H22V2H13Z"/></svg>

);
