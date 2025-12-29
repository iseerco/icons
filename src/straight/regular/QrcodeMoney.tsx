import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const QrcodeMoney = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19 22h2v2h-2zm3-1h2v-2h-2zm-3 0h2v-2h-2zm-6-8h5v5h-5zm2 3h1v-1h-1zm-2 3h5v5h-5zm2 3h1v-1h-1zm4-9h5v5h-5zm2 3h1v-1h-1zm-16.5-6c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm0-7c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm16.5 1.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm0-4.5h-18c-1.654 0-3 1.346-3 3v13h11v-2h-9v-11c0-.551.449-1 1-1h18c.551 0 1 .449 1 1v7.5h2v-7.5c0-1.654-1.346-3-3-3zm-9 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm2-4c0-1.103-.897-2-2-2s-2 .897-2 2 .897 2 2 2 2-.897 2-2z"/></svg>
);
