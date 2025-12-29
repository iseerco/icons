import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleA = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm5.095,17.188c-.114.042-.23.062-.345.062-.407,0-.79-.251-.938-.656l-.861-2.345h-5.901l-.861,2.345c-.19.519-.766.783-1.283.594-.519-.19-.784-.765-.594-1.283l3.22-8.769c.42-1.01,1.383-1.637,2.469-1.637s2.048.626,2.453,1.596l3.235,8.809c.19.519-.075,1.093-.594,1.283Zm-4.503-9.362l1.624,4.424h-4.433l1.609-4.383c.142-.34.501-.367.607-.367s.465.026.592.326Z"/></svg>

);
