import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ObjectExclude = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,8h-5V3c0-1.65-1.35-3-3-3H3C1.35,0,0,1.35,0,3v13H8v8H24V11c0-1.65-1.35-3-3-3Zm1,14H10V14H2V3c0-.55,.45-1,1-1H13c.55,0,1,.45,1,1v7h7c.55,0,1,.45,1,1v11ZM12,10h-1c-.55,0-1,.45-1,1v1h-2v-1c0-1.65,1.35-3,3-3h1v2Zm2,2h2v4h-4v-2h2v-2Z"/></svg>

);
