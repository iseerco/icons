import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCommentImage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,24H12C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12v12ZM12,3C7.038,3,3,7.038,3,12s4.038,9,9,9h9V12c0-4.962-4.038-9-9-9ZM7.5,7c-.828,0-1.5,.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Zm7.514,10.548l3.986-3.986v-1.562c0-.803-.136-1.575-.387-2.294l-3.6,3.6-4-4-5.448,5.448c.407,.948,1.018,1.788,1.777,2.466l3.672-3.672,4,4Z"/></svg>

);
