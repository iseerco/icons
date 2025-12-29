import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SpaceShuttle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.822,9.054A8.6,8.6,0,0,0,17.607,8H13.569L9.985,1.563A3,3,0,0,0,7.351,0H2V6H4V2H7.351a1,1,0,0,1,.882.529L11.28,8H0v8H11.28L8.229,21.479A1,1,0,0,1,7.351,22H4V18H2v6H7.351A3,3,0,0,0,9.98,22.444L13.569,16h4.038a8.6,8.6,0,0,0,4.215-1.054C24.766,13.2,24.769,10.8,21.822,9.054ZM16.728,14H6V10H16.727A2.225,2.225,0,0,1,16.728,14ZM2,10H4v4H2Zm18.842,3.2a5.957,5.957,0,0,1-1.24.517,4,4,0,0,0,0-3.44,5.957,5.957,0,0,1,1.24.517C22.371,11.677,22.371,12.323,20.842,13.2Z"/></svg>

);
