import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LandmarkAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,22v2H0v-2H24Zm-1-2H1v-2H3v-6H1v-2H3.059c.463-4.164,3.776-7.478,7.941-7.941V0h2V2.059c4.165,.463,7.478,3.777,7.941,7.941h2.059v2h-2v6h2v2Zm-4-8h-3v6h3v-6Zm-9,0v6h4v-6h-4Zm-5,6h3v-6h-3v6Z"/></svg>

);
