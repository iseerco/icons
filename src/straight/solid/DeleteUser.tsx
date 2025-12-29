import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DeleteUser = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.414 9.957 2.543 2.543-1.414 1.414-2.543-2.543-2.543 2.543-1.414-1.414 2.543-2.543-2.543-2.543 1.414-1.414 2.543 2.543 2.543-2.543 1.414 1.414zm-12.414 2.043a6 6 0 1 0 -6-6 6 6 0 0 0 6 6zm4.043 2h-8.086a4.963 4.963 0 0 0 -4.957 4.957v5.043h18v-5.043a4.963 4.963 0 0 0 -4.957-4.957z"/></svg>
);
