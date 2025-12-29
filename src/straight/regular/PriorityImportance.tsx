import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PriorityImportance = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,2v2H8v-2h16Zm-11,9h-5v2h5v-2ZM0,0h6v6.004H0V0Zm2,4.004h2v-2.004h-2v2.004ZM0,9h6v6.004H0v-6.004Zm2,4.004h2v-2.004h-2v2.004Zm6,8.996h7v-2h-7v2ZM0,18h6v6.004H0v-6.004Zm2,4.004h2v-2.004h-2v2.004Zm15.586-15.418l-3.579,3.58,1.414,1.414,2.579-2.579v15h2v-15l2.564,2.564,1.414-1.414-3.564-3.565c-.779-.778-2.049-.779-2.828,0Z"/>
</svg>

);
