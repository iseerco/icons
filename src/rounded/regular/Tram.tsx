import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Tram = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,9H12V3c0-.017,0-.035,0-.052A2,2,0,1,0,10,5V9H5a5.006,5.006,0,0,0-5,5v5a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V14A5.006,5.006,0,0,0,19,9Zm3,5v2H17V11h2A3,3,0,0,1,22,14ZM9,11h6v5H9ZM5,11H7v5H2V14A3,3,0,0,1,5,11ZM19,22H5a3,3,0,0,1-3-3V18H22v1A3,3,0,0,1,19,22ZM13,2a2,2,0,0,1,4,0A2,2,0,0,1,13,2Zm6.016-.276A1,1,0,0,1,19.821.562l3-.546a1,1,0,0,1,.358,1.968l-3,.545A1,1,0,0,1,19.016,1.724Zm-19,3.455A1,1,0,0,1,.821,4.016l4-.727a1,1,0,0,1,.358,1.968l-4,.727A1,1,0,0,1,.016,5.179Z"/></svg>

);
