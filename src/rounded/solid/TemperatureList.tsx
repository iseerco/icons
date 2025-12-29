import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TemperatureList = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23,2h-8c-.553,0-1-.447-1-1s.447-1,1-1h8c.553,0,1,.447,1,1s-.447,1-1,1Zm1,4c0-.553-.447-1-1-1h-8c-.553,0-1,.447-1,1s.447,1,1,1h8c.553,0,1-.447,1-1Zm0,5c0-.553-.447-1-1-1h-6c-.553,0-1,.447-1,1s.447,1,1,1h6c.553,0,1-.447,1-1Zm-10,6c0,3.859-3.141,7-7,7S0,20.859,0,17c0-1.826.724-3.584,2-4.889v-7.111C2,2.243,4.243,0,7,0s5,2.243,5,5v7.111c1.276,1.305,2,3.062,2,4.889Zm-4,0c0-1.302-.839-2.402-2-2.816v-5.184c0-.553-.447-1-1-1s-1,.447-1,1v5.184c-1.161.414-2,1.514-2,2.816,0,1.654,1.346,3,3,3s3-1.346,3-3Z"/>
</svg>

);
