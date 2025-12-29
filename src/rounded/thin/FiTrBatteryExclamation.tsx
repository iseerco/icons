import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrBatteryExclamation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,10.5v5c0,.827-.673,1.5-1.5,1.5h-.527c-.25,2.247-2.16,4-4.473,4h-4c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h4c1.93,0,3.5-1.57,3.5-3.5,0-.276.224-.5.5-.5h1c.275,0,.5-.225.5-.5v-5c0-.275-.225-.5-.5-.5h-1c-.276,0-.5-.224-.5-.5,0-1.93-1.57-3.5-3.5-3.5h-4c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h4c2.312,0,4.223,1.753,4.473,4h.527c.827,0,1.5.673,1.5,1.5ZM4.5,6h3c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-3C2.019,5,0,7.019,0,9.5v7c0,2.481,2.019,4.5,4.5,4.5h3c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-3c-1.93,0-3.5-1.57-3.5-3.5v-7c0-1.93,1.57-3.5,3.5-3.5Zm6,13c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm0-2c.276,0,.5-.224.5-.5V5.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v11c0,.276.224.5.5.5Z"/></svg>

);
