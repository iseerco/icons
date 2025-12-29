import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ShareSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15,17.99h2v6H0V9.99C0,8.33,1.35,6.99,3,6.99H7.03c-.44,.58-.77,1.26-.92,2H3c-.55,0-1,.45-1,1v12H15v-4ZM23.41,6.57L16.86,.01l-1.41,1.41,5.56,5.56H11c-1.65,0-3,1.35-3,3v8h2V9.99c0-.55,.45-1,1-1h10l-5.61,5.61,1.41,1.41,6.61-6.61c.78-.78,.78-2.05,0-2.83Z"/></svg>

);
