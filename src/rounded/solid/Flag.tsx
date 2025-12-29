import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Flag = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m1 24a1 1 0 0 1 -1-1v-19a4 4 0 0 1 4-4h7a4 4 0 0 1 4 4v5a4 4 0 0 1 -4 4h-9v10a1 1 0 0 1 -1 1zm19-20h-3v5a6.006 6.006 0 0 1 -6 6h-.444a3.987 3.987 0 0 0 3.444 2h6a4 4 0 0 0 4-4v-5a4 4 0 0 0 -4-4z"/></svg>
);
