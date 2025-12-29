import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PayrollCalendar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18,16c0,.379.271.698.645.761l3.04.506c1.342.224,2.315,1.374,2.315,2.733,0,1.654-1.346,3-3,3v1h-2v-1c-1.654,0-3-1.346-3-3h2c0,.552.448,1,1,1h2c.552,0,1-.448,1-1,0-.379-.271-.698-.645-.761l-3.04-.506c-1.342-.224-2.315-1.374-2.315-2.733,0-1.654,1.346-3,3-3v-1h2v1c1.654,0,3,1.346,3,3h-2c0-.552-.448-1-1-1h-2c-.552,0-1,.448-1,1Zm6-11v5H2v12h12.618c.41.797,1,1.487,1.73,2H0V5c0-1.654,1.346-3,3-3h3V0h2v2h8V0h2v2h3c1.654,0,3,1.346,3,3Zm-2,0c0-.552-.448-1-1-1H3c-.552,0-1,.448-1,1v3h20v-3Z"/>
</svg>

);
