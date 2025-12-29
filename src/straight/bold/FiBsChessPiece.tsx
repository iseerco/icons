import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsChessPiece = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19 21v-2.721l-.562-.45c-2.372-1.897-2.438-3.856-2.438-7.307h2l.006-3h-2.455a3.944 3.944 0 0 0 .477-1.854c0-1.244-.917-2.808-2.023-4.573a2.332 2.332 0 0 0 -3.952 0c-1.111 1.766-2.027 3.33-2.027 4.572a3.939 3.939 0 0 0 .469 1.838l-2.495-.005v3h2c0 3.463-.069 5.429-2.438 7.325l-.562.454v2.721h-1.974v3h18v-3zm-6-10.485c0 2.759.055 5.244 1.541 7.485h-5.082c1.484-2.239 1.541-4.727 1.541-7.489z"/></svg>
);
