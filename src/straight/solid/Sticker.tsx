import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Sticker = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m10.157 23.843a11.992 11.992 0 1 1 13.686-13.686 11.914 11.914 0 0 0 -13.686 13.686zm13.843-11.643a10 10 0 0 0 -11.8 11.8z"/></svg>
);
