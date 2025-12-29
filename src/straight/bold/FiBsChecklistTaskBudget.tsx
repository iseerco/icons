import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsChecklistTaskBudget = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  

<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
<path d="M16.3,24H3.5C1.6,24,0,22.4,0,20.5V2h5.3c0.6-1.2,1.8-2,3.2-2h3c1.4,0,2.6,0.8,3.2,2H20v8h-3V5h-5V3.5C12,3.2,11.8,3,11.5,3  h-3C8.2,3,8,3.2,8,3.5V5H3v15.5C3,20.8,3.2,21,3.5,21h10.7C14.6,22.2,15.3,23.3,16.3,24z M21.7,17.3l-3-0.5C18.3,16.7,18,16.4,18,16  c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1h2c0-1.7-1.3-3-3-3v-1h-2v1c-1.7,0-3,1.3-3,3c0,1.4,1,2.5,2.3,2.7l3,0.5c0.4,0.1,0.6,0.4,0.6,0.8  c0,0.6-0.4,1-1,1h-2c-0.6,0-1-0.4-1-1h-2c0,1.7,1.3,3,3,3v1h2v-1c1.7,0,3-1.3,3-3C24,18.6,23,17.5,21.7,17.3z M9.6,7.3L11,8.7  l-2.8,2.8C7.9,11.8,7.5,12,7.1,12s-0.8-0.2-1.1-0.5L4.3,9.9l1.4-1.4l1.4,1.4C7.1,9.8,9.6,7.3,9.6,7.3z M9.6,13.3l1.4,1.4l-2.8,2.8  C7.9,17.8,7.5,18,7.1,18s-0.8-0.2-1.1-0.5l-1.6-1.6l1.4-1.4l1.4,1.4C7.1,15.8,9.6,13.3,9.6,13.3z"/>
</svg>

);
