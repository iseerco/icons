import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const QrcodeTicket = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19 22h2v2h-2zm3-1h2v-2h-2zm-3 0h2v-2h-2zm-6-8h5v5h-5zm2 3h1v-1h-1zm-2 3h5v5h-5zm2 3h1v-1h-1zm9-9v5h-5v-5zm-2 2h-1v1h1zm-4-12v8h-7v7h-1v2h1v4h-8c-1.654 0-3-1.346-3-3v-18c0-1.654 1.346-3 3-3h4v1c0 1.103.897 2 2 2s2-.897 2-2v-1h4c1.654 0 3 1.346 3 3zm-14 15h-2v2h2zm4 0h-2v2h2z"/></svg>
);
