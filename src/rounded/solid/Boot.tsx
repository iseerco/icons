import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Boot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m14.5,5H2.5c-1.381,0-2.5-1.119-2.5-2.5h0C0,1.119,1.119,0,2.5,0h12c1.381,0,2.5,1.119,2.5,2.5h0c0,1.381-1.119,2.5-2.5,2.5Zm4.546,7.155l-4.046-1.121v-.006h-4c-.552,0-1-.448-1-1h0c0-.552.448-1,1-1h4v-2.028H2v16c0,.552.448,1,1,1h0c.552,0,1-.448,1-1v-1h2v1c0,.552.448,1,1,1h0c.552,0,1-.448,1-1v-1h2v1c0,.552.448,1,1,1h0c.552,0,1-.448,1-1v-1h2v1c0,.552.448,1,1,1h0c.552,0,1-.448,1-1v-1h2v1c0,.552.448,1,1,1h0c.552,0,1-.448,1-1v-1h2v1c0,.552.448,1,1,1h0c.552,0,1-.448,1-1v-4.733c0-2.969-2.113-5.546-4.954-6.112Z"/>
</svg>

);
