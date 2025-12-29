import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquarePollVertical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,0H3C1.35,0,0,1.35,0,3V24H24V3c0-1.65-1.35-3-3-3Zm1,22H2V3c0-.55,.45-1,1-1H21c.55,0,1,.45,1,1V22ZM9,8h2v11h-2V8Zm-4,3h2v8h-2V11ZM13,5h2v14h-2V5Zm4,10h2v4h-2v-4Z"/></svg>

);
