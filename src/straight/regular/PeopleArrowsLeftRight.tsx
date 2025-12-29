import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PeopleArrowsLeftRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.63,2.5c0-1.38,1.12-2.5,2.5-2.5s2.5,1.12,2.5,2.5-1.12,2.5-2.5,2.5-2.5-1.12-2.5-2.5Zm7.5,6.5c0-1.65-1.35-3-3-3h-4c-.4,0-.78,.08-1.13,.22l1.78,1.78h3.35c.55,0,1,.45,1,1v6h-3.35l-2.65,2.65v6.35h2v-7h2v7h2v-7h2V9ZM5,5c1.38,0,2.5-1.12,2.5-2.5S6.38,0,5,0,2.5,1.12,2.5,2.5s1.12,2.5,2.5,2.5Zm12.42,5.59l-2.92-2.92-1.41,1.41,1.92,1.91h-6l1.91-1.91-1.41-1.41-2.92,2.92c-.77,.77-.77,2.04,0,2.81l2.91,2.91,1.41-1.41-1.91-1.9h6l-1.9,1.9,1.41,1.41,2.91-2.91c.77-.78,.77-2.04,0-2.81ZM2,15v-6c0-.55,.45-1,1-1h3.35l1.78-1.78c-.35-.14-.73-.22-1.13-.22H3c-1.65,0-3,1.35-3,3v8H2v7h2v-7h2v7h2v-6.35l-2.65-2.65H2Z"/></svg>

);
