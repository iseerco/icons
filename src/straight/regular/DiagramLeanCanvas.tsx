import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DiagramLeanCanvas = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,2H3C1.35,2,0,3.35,0,5V22H24V5c0-1.65-1.35-3-3-3Zm1,3V15h-3V4h2c.55,0,1,.45,1,1Zm-5,4h-2V4h2v5Zm-4,6h-2V4h2V15Zm-4-6h-2V4h2v5Zm-2,2h2v4h-2v-4Zm8,0h2v4h-2v-4ZM3,4h2V15H2V5c0-.55,.45-1,1-1Zm-1,13H11v3H2v-3Zm11,3v-3h9v3H13Z"/></svg>

);
