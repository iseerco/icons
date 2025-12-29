import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSnowplow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,16.229V7.51H19V11H15.662a3.518,3.518,0,0,0-2.119-1.841L10.822,3.072A3.5,3.5,0,0,0,7.626,1H3V6.172A3,3,0,0,0,1,9v6.672A4.5,4.5,0,0,0,4.5,23h8A4.5,4.5,0,0,0,16,15.672V14h3v2.229a9.332,9.332,0,0,0,2.752,6.644l2.121-2.121A6.354,6.354,0,0,1,22,16.229ZM12.5,12a.5.5,0,0,1,.5.5v1.528A4.583,4.583,0,0,0,12.5,14h-8a4.583,4.583,0,0,0-.5.028V12ZM6,4H7.626a.5.5,0,0,1,.457.3l2.1,4.7H6ZM3.5,20A1.5,1.5,0,1,1,5,18.5,1.5,1.5,0,0,1,3.5,20Zm5,0A1.5,1.5,0,1,1,10,18.5,1.5,1.5,0,0,1,8.5,20Zm5,0A1.5,1.5,0,1,1,15,18.5,1.5,1.5,0,0,1,13.5,20Z"/></svg>

);
