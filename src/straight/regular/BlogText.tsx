import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BlogText = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,2H3C1.35,2,0,3.35,0,5V22H24V5c0-1.65-1.35-3-3-3ZM3,4H21c.55,0,1,.45,1,1v2H2v-2c0-.55,.45-1,1-1Zm-1,16V9H22v11H2Zm2-9h6v2h-2v5h-2v-5h-2v-2Zm8,0h7v2h-7v-2Zm0,4h7v2h-7v-2Z"/></svg>

);
