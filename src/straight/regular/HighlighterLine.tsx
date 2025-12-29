import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HighlighterLine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10.45,20L21.24,7.66c1.06-1.19,1.01-3-.12-4.12l-2.66-2.66c-1.12-1.12-2.93-1.18-4.11-.12L2,11.55v7.04l-1.71,1.71,1.41,1.41,1.71-1.71h7.04Zm-6.45-6.65l4.65,4.65H4v-4.65ZM15.67,2.26h0c.4-.36,1-.34,1.37,.03l2.66,2.66c.38,.38,.39,.98,.03,1.38l-9.29,10.64-5.42-5.42L15.67,2.26Zm8.33,19.74v2H4v-2H24Z"/></svg>

);
