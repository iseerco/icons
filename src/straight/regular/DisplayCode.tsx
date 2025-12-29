import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DisplayCode = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.418,8.594c.775,.775,.775,2.037,0,2.812l-3.299,3.299-1.414-1.414,3.298-3.299-3.298-3.283,1.414-1.414,3.298,3.299Zm-9.538-3.299l-3.299,3.299c-.774,.775-.774,2.037,0,2.812l3.298,3.299,1.414-1.414-3.298-3.283,3.298-3.299-1.414-1.414Zm4.12,13.705v2h5v2H6v-2h5v-2H0V4C0,2.346,1.346,1,3,1H21c1.654,0,3,1.346,3,3v15H13Zm-11-2H22V4c0-.552-.449-1-1-1H3c-.551,0-1,.448-1,1v13Z"/></svg>

);
