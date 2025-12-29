import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WaveformPath = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19,8v8c0,.553-.447,1-1,1s-1-.447-1-1v-8c0-.553.447-1,1-1s1,.447,1,1ZM14,0c-.553,0-1,.447-1,1v22c0,.553.447,1,1,1s1-.447,1-1V1c0-.553-.447-1-1-1Zm8,4c-.553,0-1,.447-1,1v14c0,.553.447,1,1,1s1-.447,1-1V5c0-.553-.447-1-1-1Zm-12,0c-.553,0-1,.447-1,1v14c0,.553.447,1,1,1s1-.447,1-1V5c0-.553-.447-1-1-1Zm-4,3c-.553,0-1,.447-1,1v8c0,.553.447,1,1,1s1-.447,1-1v-8c0-.553-.447-1-1-1Zm-4,2c-.553,0-1,.447-1,1v4c0,.553.447,1,1,1s1-.447,1-1v-4c0-.553-.447-1-1-1Z"/></svg>

);
