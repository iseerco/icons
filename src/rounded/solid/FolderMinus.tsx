import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FolderMinus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,7v-.974C0,3.269,2.243,1.026,5,1.026h2.528c.463,0,.927,.109,1.341,.316l3.156,1.578c.138,.069,.292,.105,.446,.105h6.528c2.405,0,4.418,1.708,4.892,3.974H0Zm24,2v9.026c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5V9H24Zm-8,7c0-.553-.447-1-1-1h-6c-1.308,.005-1.307,1.995,0,2h6c.553,0,1-.447,1-1Z"/></svg>

);
