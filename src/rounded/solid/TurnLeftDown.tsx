import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TurnLeftDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,0h-8c-2.757,0-5,2.243-5,5v16.612c-.037-.03-.084-.043-.119-.077l-5.177-5.134c-.393-.39-1.026-.387-1.414.006-.389.393-.386,1.025.006,1.414l5.175,5.131c.676.676,1.574,1.048,2.529,1.048s1.854-.372,2.527-1.045l5.177-5.134c.392-.389.395-1.021.006-1.414-.388-.392-1.022-.395-1.414-.006l-5.18,5.137c-.034.034-.08.046-.116.075V5c0-1.654,1.346-3,3-3h8c.552,0,1-.448,1-1s-.448-1-1-1Z"/>
</svg>

);
