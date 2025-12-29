import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DiceFour = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.806 2.858c-.1-.325-.357-.578-.685-.67-.173-.049-4.273-1.188-9.121-1.188s-8.948 1.139-9.12 1.188c-.329.093-.588.347-.687.674-.049.161-1.193 4.007-1.193 9.139 0 5.175 1.146 8.982 1.194 9.142.1.325.358.578.686.67.172.049 4.272 1.188 9.121 1.188s8.947-1.139 9.12-1.188c.329-.093.588-.347.687-.674.049-.161 1.193-4.007 1.193-9.139 0-5.175-1.146-8.982-1.194-9.142z" opacity=".5"/><circle cx="7.461" cy="7.461" r="1"/><circle cx="16.539" cy="7.461" r="1"/><circle cx="16.539" cy="16.539" r="1"/><circle cx="7.461" cy="16.539" r="1"/></svg>
);
