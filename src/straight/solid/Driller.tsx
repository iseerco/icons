import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Driller = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13 22.5v1.5h-13v-1.5c0-1.381 1.119-2.5 2.5-2.5h8c1.381 0 2.5 1.119 2.5 2.5zm7-17.5v-2h-3v6h3v-2h4v-2zm-5 5.218-2.138 1.782h-3.032l-.706 6h-6.396l.707-6.007c-1.902-.035-3.435-1.583-3.435-3.493v-4.5c0-2.124 1.71-4 4-4h8.862l2.138 1.782v8.437zm-4-3.218h-7v2h7zm0-4h-7v2h7z"/></svg>
);
