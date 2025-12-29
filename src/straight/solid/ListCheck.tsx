import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ListCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m4 6a2.982 2.982 0 0 1 -2.122-.879l-1.585-1.585 1.414-1.414 1.586 1.585a1.023 1.023 0 0 0 1.414 0l3.586-3.585 1.414 1.414-3.586 3.585a2.978 2.978 0 0 1 -2.121.879zm20-3h-12v2h12zm-17.879 10.121 3.586-3.585-1.414-1.414-3.586 3.585a1.023 1.023 0 0 1 -1.414 0l-1.586-1.585-1.414 1.414 1.585 1.585a3 3 0 0 0 4.243 0zm17.879-2.121h-12v2h12zm-17.879 10.121 3.586-3.585-1.414-1.414-3.586 3.585a1.023 1.023 0 0 1 -1.414 0l-1.586-1.585-1.414 1.414 1.585 1.585a3 3 0 0 0 4.243 0zm17.879-2.121h-12v2h12z"/></svg>
);
