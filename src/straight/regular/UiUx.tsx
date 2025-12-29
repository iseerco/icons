import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UiUx = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,11v2H0v-2h24Zm-8,13h2v-9h-2v9Zm-4-4c0,1.103-.897,2-2,2s-2-.897-2-2v-5h-2v5c0,2.206,1.794,4,4,4s4-1.794,4-4v-5h-2v5Zm-4-11c2.206,0,4-1.794,4-4V0h-2v5c0,1.103-.897,2-2,2s-2-.897-2-2V0h-2v5c0,2.206,1.794,4,4,4Zm7.547,0l1.203-2.308,1.203,2.308h2.286l-2.346-4.5,2.346-4.5h-2.286l-1.203,2.308-1.203-2.308h-2.286l2.346,4.5-2.346,4.5h2.286Z"/>
</svg>

);
