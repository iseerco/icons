import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ShareSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.12,10.12l-5.4,5.58c-.2,.2-.46,.3-.72,.3s-.5-.09-.7-.28c-.4-.38-.41-1.02-.02-1.41l5.14-5.3H13c-1.65,0-3,1.35-3,3v5c0,.55-.45,1-1,1s-1-.45-1-1v-5c0-2.76,2.24-5,5-5h8.42L16.28,1.7c-.38-.4-.38-1.03,.02-1.41,.4-.38,1.03-.38,1.41,.02l5.41,5.59c1.16,1.16,1.16,3.06-.01,4.23Zm-8.21,7.03c-.37-.36-1.87-2.35-2.91-3.75,0,0,0,2,0,3.48s-.98,2.78-2.4,3.06c-1.92,.37-3.6-1.09-3.6-2.94v-5c0-1.96,.81-3.73,2.11-5h-3.11C2.24,7,0,9.24,0,12v7c0,2.76,2.24,5,5,5h7c2.76,0,5-2.24,5-5v-1c-.78,0-1.53-.3-2.09-.85Z"/></svg>

);
