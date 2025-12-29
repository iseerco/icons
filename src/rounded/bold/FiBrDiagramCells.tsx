import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrDiagramCells = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,0H4C1.79,0,0,1.79,0,4v2c0,2.21,1.79,4,4,4H20c2.21,0,4-1.79,4-4v-2c0-2.21-1.79-4-4-4Zm1,6c0,.55-.45,1-1,1H4c-.55,0-1-.45-1-1v-2c0-.55,.45-1,1-1H20c.55,0,1,.45,1,1v2Zm-1,8H4c-2.21,0-4,1.79-4,4v2c0,2.21,1.79,4,4,4H20c2.21,0,4-1.79,4-4v-2c0-2.21-1.79-4-4-4Zm1,6c0,.55-.45,1-1,1H4c-.55,0-1-.45-1-1v-2c0-.55,.45-1,1-1H20c.55,0,1,.45,1,1v2Z"/></svg>

);
