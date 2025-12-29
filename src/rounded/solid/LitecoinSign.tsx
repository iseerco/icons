import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LitecoinSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,23c0,.55-.45,1-1,1H9c-2.76,0-5-2.24-5-5v-6.01l-2.66,.95c-.11,.04-.22,.06-.34,.06-.41,0-.8-.25-.94-.66-.19-.52,.09-1.09,.61-1.28l3.34-1.19V1c0-.55,.45-1,1-1s1,.45,1,1V10.15l8.66-3.09c.52-.19,1.09,.08,1.28,.61,.19,.52-.09,1.09-.61,1.28l-9.34,3.33v6.72c0,1.65,1.35,3,3,3h12c.55,0,1,.45,1,1Z"/></svg>

);
