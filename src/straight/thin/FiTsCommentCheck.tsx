import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCommentCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,24h-12C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12v12ZM12,1C5.935,1,1,5.935,1,12s4.935,11,11,11h11v-11c0-6.065-4.935-11-11-11Zm-.478,14.549l7.102-7.012-.703-.711-7.104,7.014c-.207.207-.561.211-.775-.004l-3.965-3.875-.699.715,3.961,3.871c.291.292.68.453,1.093.453s.802-.161,1.091-.451Z"/></svg>

);
