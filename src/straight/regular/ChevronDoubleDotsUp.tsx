import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChevronDoubleDotsUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13.5 12.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5zm-1.5 8.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm0-5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-1.465-9.905-7.092 6.677 1.371 1.457 7.166-6.78 7.207 6.78 1.371-1.457-7.07-6.656c-.793-.795-2.204-.773-2.952-.021zm2.951-5.479c-.819-.82-2.153-.82-2.952-.02l-9.721 9.177 1.373 1.454 9.817-9.294 9.811 9.294 1.373-1.454z"/></svg>
);
