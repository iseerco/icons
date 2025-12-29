import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PeoplePants = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M2.5,2.5C2.5,1.12,3.62,0,5,0s2.5,1.12,2.5,2.5-1.12,2.5-2.5,2.5-2.5-1.12-2.5-2.5Zm7.5,6.5v8h-2v7h-2v-7h-2v7H2v-7H0V9c0-1.65,1.35-3,3-3H7c1.65,0,3,1.35,3,3Zm-2,0c0-.55-.45-1-1-1H3c-.55,0-1,.45-1,1v6h6v-6Zm11-4c1.38,0,2.5-1.12,2.5-2.5s-1.12-2.5-2.5-2.5-2.5,1.12-2.5,2.5,1.12,2.5,2.5,2.5Zm5,12h-2v7h-2v-7h-2v7h-2v-7h-2V9c0-1.65,1.35-3,3-3h4c1.65,0,3,1.35,3,3v8Zm-2-8c0-.55-.45-1-1-1h-4c-.55,0-1,.45-1,1v6h6v-6Z"/></svg>

);
