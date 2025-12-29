import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const QrcodeBox = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19 22h2v2h-2zm3-1h2v-2h-2zm-3 0h2v-2h-2zm-6-8h5v5h-5zm2 3h1v-1h-1zm-2 3h5v5h-5zm2 3h1v-1h-1zm4-9h5v5h-5zm2 3h1v-1h-1zm3-13v6h-1v2h-2v-2h-18v13h8v2h-10v-15h-1v-6c0-1.654 1.346-3 3-3h18c1.654 0 3 1.346 3 3zm-22 4h20v-4c0-.551-.449-1-1-1h-18c-.551 0-1 .449-1 1z"/></svg>
);
