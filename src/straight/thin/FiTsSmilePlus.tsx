import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSmilePlus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m9,6C4.038,6,0,10.038,0,15s4.038,9,9,9,9-4.038,9-9S13.962,6,9,6Zm0,17c-4.411,0-8-3.589-8-8S4.589,7,9,7s8,3.589,8,8-3.589,8-8,8Zm-4-10c0-.552.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1Zm8,0c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm11-8h-4v4h-1v-4h-4v-1h4V0h1v4h4v1Zm-11.833,11.727l.666.746c-.07.062-1.733,1.527-3.833,1.527s-3.763-1.465-3.833-1.527l.666-.747c.014.013,1.456,1.273,3.167,1.273,1.722,0,3.153-1.26,3.167-1.273Z"/></svg>

);
