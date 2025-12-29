import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UtilityPole = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23,0c-.552,0-1,.448-1,1v.5c0,.276-.224.5-.5.5h-1.5v-1c0-.552-.448-1-1-1s-1,.448-1,1v1h-5v-1c0-.552-.448-1-1-1s-1,.448-1,1v1h-5v-1c0-.552-.448-1-1-1s-1,.448-1,1v1h-1.5c-.276,0-.5-.224-.5-.5v-.5c0-.552-.448-1-1-1S0,.448,0,1v.5c0,1.378,1.122,2.5,2.5,2.5h2.086l6.414,6.414v12.586c0,.552.448,1,1,1s1-.448,1-1v-12.586l6.414-6.414h2.086c1.378,0,2.5-1.122,2.5-2.5v-.5c0-.552-.448-1-1-1ZM7.414,4h3.586v3.586l-3.586-3.586Zm5.586,0h3.586l-3.586,3.586v-3.586Z"/>
</svg>

);
