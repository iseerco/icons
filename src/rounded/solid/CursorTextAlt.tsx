import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CursorTextAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,9v3h1a1,1,0,0,1,0,2H13v1a1,1,0,0,0,1,1,1,1,0,0,1,0,2,2.981,2.981,0,0,1-2-.78A2.981,2.981,0,0,1,10,18a1,1,0,0,1,0-2,1,1,0,0,0,1-1V14H10a1,1,0,0,1,0-2h1V9a1,1,0,0,0-1-1,1,1,0,0,1,0-2,2.981,2.981,0,0,1,2,.78A2.981,2.981,0,0,1,14,6a1,1,0,0,1,0,2A1,1,0,0,0,13,9ZM24,21a2.993,2.993,0,0,1-5.816,1H5.816A2.993,2.993,0,1,1,2,18.184V5.816A2.993,2.993,0,1,1,5.816,2H18.184A2.993,2.993,0,1,1,22,5.816V18.184A2.99,2.99,0,0,1,24,21Zm-4-2.816V5.816A2.987,2.987,0,0,1,18.184,4H5.816A2.987,2.987,0,0,1,4,5.816V18.184A2.987,2.987,0,0,1,5.816,20H18.184A2.987,2.987,0,0,1,20,18.184Z"/></svg>

);
