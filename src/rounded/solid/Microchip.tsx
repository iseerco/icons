import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Microchip = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9,9h6v6h-6v-6Zm13,2v2h1c.55,0,1,.45,1,1s-.45,1-1,1h-1v2h1c.55,0,1,.45,1,1s-.45,1-1,1h-1.42c-.5,1.15-1.43,2.07-2.58,2.58v1.42c0,.55-.45,1-1,1s-1-.45-1-1v-1h-2v1c0,.55-.45,1-1,1s-1-.45-1-1v-1h-2v1c0,.55-.45,1-1,1s-1-.45-1-1v-1h-2v1c0,.55-.45,1-1,1s-1-.45-1-1v-1.42c-1.15-.5-2.07-1.43-2.58-2.58H1c-.55,0-1-.45-1-1s.45-1,1-1h1v-2H1c-.55,0-1-.45-1-1s.45-1,1-1h1v-2H1c-.55,0-1-.45-1-1s.45-1,1-1h1v-2H1c-.55,0-1-.45-1-1s.45-1,1-1h1.42c.5-1.15,1.43-2.07,2.58-2.58V1c0-.55,.45-1,1-1s1,.45,1,1v1h2V1c0-.55,.45-1,1-1s1,.45,1,1v1h2V1c0-.55,.45-1,1-1s1,.45,1,1v1h2V1c0-.55,.45-1,1-1s1,.45,1,1v1.42c1.15,.5,2.07,1.43,2.58,2.58h1.42c.55,0,1,.45,1,1s-.45,1-1,1h-1v2h1c.55,0,1,.45,1,1s-.45,1-1,1h-1Zm-5,5V8c0-.55-.45-1-1-1H8c-.55,0-1,.45-1,1v8c0,.55,.45,1,1,1h8c.55,0,1-.45,1-1Z"/></svg>

);
