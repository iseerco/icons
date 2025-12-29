import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPaste = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,9h-7c-1.93,0-3.5,1.57-3.5,3.5v11.5h14V12.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,12H13V12.5c0-.28,.22-.5,.5-.5h7c.28,0,.5,.22,.5,.5v8.5Zm-6-7h4v3h-4v-3ZM3,5.5v15.5h5v3H0V5.5C0,3.57,1.57,2,3.5,2h2.35c.56-1.18,1.76-2,3.15-2h2c1.39,0,2.59,.82,3.15,2h2.35c1.93,0,3.5,1.57,3.5,3.5v1.5h-3v-1.5c0-.28-.22-.5-.5-.5h-2.35c-.56,1.18-1.76,2-3.15,2h-2c-1.39,0-2.59-.82-3.15-2H3.5c-.28,0-.5,.22-.5,.5Z"/></svg>

);
