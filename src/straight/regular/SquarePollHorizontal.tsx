import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquarePollHorizontal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,0H3C1.35,0,0,1.35,0,3V24H24V3c0-1.65-1.35-3-3-3Zm1,22H2V3c0-.55,.45-1,1-1H21c.55,0,1,.45,1,1V22ZM8,13h11v2H8v-2Zm3,4h8v2H11v-2ZM5,9h14v2H5v-2ZM15,5h4v2h-4v-2Z"/></svg>

);
