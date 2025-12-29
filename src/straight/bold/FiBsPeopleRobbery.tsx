import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPeopleRobbery = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M2,2.5C2,1.119,3.119,0,4.5,0s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm15,2.5c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5Zm7,.783l-3,2.836v15.381h-3v-6h-2v6h-3V8.619l-3-2.836V0h3V4.49l1.597,1.51h4.807l1.597-1.51V0h3V5.783Zm-6,9.217v-6h-2v6h2Zm-8.78-4h1.78v3h-3.22l-.78-.973v4.973h-2v6H2v-6H0V9.5c0-1.93,1.57-3.5,3.5-3.5,1.026,0,1.941,.452,2.582,1.158l3.138,3.842ZM3,15h1v-5.5c0-.275-.224-.5-.5-.5s-.5,.225-.5,.5v5.5Z"/>
</svg>

);
