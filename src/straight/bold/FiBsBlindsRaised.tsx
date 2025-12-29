import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBlindsRaised = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,17.338V3.5c0-1.93-1.57-3.5-3.5-3.5H3.5C1.57,0,0,1.57,0,3.5V24H16.257c-.686-.83-1.13-1.866-1.232-3H3V13h14V3h1.5c.276,0,.5,.225,.5,.5v13.838c-1.181,.563-2,1.769-2,3.162,0,1.93,1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5c0-1.393-.819-2.599-2-3.162ZM3,10v-2H14v2H3ZM14,5H3v-1.5c0-.275,.224-.5,.5-.5H14v2Z"/></svg>

);
