import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DeleteDocument = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.414 5h-4.414v-4.414zm.586 2v17h-20v-21a3 3 0 0 1 3-3h10v7zm-8.586 8 2.543-2.543-1.414-1.414-2.543 2.543-2.543-2.543-1.414 1.414 2.543 2.543-2.543 2.543 1.414 1.414 2.543-2.543 2.543 2.543 1.414-1.414z"/></svg>
);
