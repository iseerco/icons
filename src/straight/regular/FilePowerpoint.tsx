import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FilePowerpoint = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.41,0H5c-1.65,0-3,1.35-3,3V24H22V7.59L14.41,0Zm.59,3.41l3.59,3.59h-3.59V3.41Zm5,18.59H4V3c0-.55,.45-1,1-1H13v7h7v13ZM9,11v9h2v-3h1c1.65,0,3-1.35,3-3s-1.35-3-3-3h-3Zm4,3c0,.55-.45,1-1,1h-1v-2h1c.55,0,1,.45,1,1Z"/></svg>

);
