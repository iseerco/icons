import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const QrcodeBox = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 22v2h-2v-2zm1-3v2h2v-2zm-3 0v2h2v-2zm-1-6h-5v5h5zm-3 2h1v1h-1zm3 4h-5v5h5zm-3 2h1v1h-1zm9-8h-5v5h5zm-3 2h1v1h-1zm-10-4h12v-2h-22v15h10zm13-8c0-1.657-1.343-3-3-3h-18c-1.657 0-3 1.343-3 3v4h24z"/></svg>
);
