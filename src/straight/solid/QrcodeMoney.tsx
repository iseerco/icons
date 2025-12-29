import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const QrcodeMoney = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19 22h2v2h-2zm3-1h2v-2h-2zm-3 0h2v-2h-2zm-6-8h5v5h-5zm2 3h1v-1h-1zm-2 3h5v5h-5zm2 3h1v-1h-1zm4-9h5v5h-5zm2 3h1v-1h-1zm3-13v8h-9.38c.839-.733 1.38-1.798 1.38-3 0-2.209-1.791-4-4-4s-4 1.791-4 4c0 1.862 1.278 3.412 3 3.859v4.141h-11v-13c0-1.657 1.343-3 3-3h18c1.657 0 3 1.343 3 3zm-19 9.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm0-9c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm17 0c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm-8 4.5c0-1.105-.895-2-2-2s-2 .895-2 2 .895 2 2 2 2-.895 2-2z"/></svg>
);
