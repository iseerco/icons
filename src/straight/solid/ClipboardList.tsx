import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ClipboardList = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15.829,2c-.413-1.164-1.525-2-2.829-2h-2c-1.304,0-2.416,.836-2.829,2H3V21c0,1.654,1.346,3,3,3h12c1.654,0,3-1.346,3-3V2h-5.171Zm-6.829,16h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm8,8h-6v-2h6v2Zm0-4h-6v-2h6v2Zm0-4h-6v-2h6v2Z"/></svg>

);
