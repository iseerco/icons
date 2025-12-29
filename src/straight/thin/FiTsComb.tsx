import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsComb = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16.612 1.458-1.154 1.153 5.561 5.56-.708.708-5.561-5.56-2.266 2.266 5.561 5.56-.708.708-5.561-5.56-2.342 2.342 5.561 5.56-.708.708-5.561-5.56-2.329 2.329 5.56 5.56-.708.708-5.56-5.56-2.266 2.266 5.56 5.56-.708.708-5.56-5.56-1.259 1.259c-.607.583-.608 1.63 0 2.213l4.466 4.465-.708.708-4.467-4.464c-.996-.955-.996-2.675 0-3.629l15.157-15.156c1.001-.999 2.629-1 3.63 0l4.466 4.466-.708.708-4.466-4.466c-.61-.61-1.603-.609-2.214 0z"/></svg>
);
