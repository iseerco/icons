import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PenNibSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,2.59L15.29,.29c.39-.39,1.02-.39,1.41,0l7,7c.39,.39,.39,1.02,0,1.41l-2.29,2.29L13,2.59Zm5.71,14.71l1.68-4.49L11.19,3.61l-4.49,1.68L1.71,.29C1.32-.1,.68-.1,.29,.29S-.1,1.32,.29,1.71L22.29,23.71c.2,.2,.45,.29,.71,.29s.51-.1,.71-.29c.39-.39,.39-1.02,0-1.41l-5-5Zm-7.73-2.07l5.04,5.04-12.14,3.68c-.9,.27-1.57-.84-.9-1.5l5.51-5.51c.16,.04,.33,.07,.51,.07,1.03,0,1.87-.78,1.98-1.78ZM1.56,21.03c-.67,.67-1.78,0-1.5-.9L3.74,7.99l5.04,5.04c-1,.11-1.78,.95-1.78,1.98,0,.18,.03,.35,.07,.51L1.56,21.03Z"/></svg>

);
