import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCourtOrder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m8.969 10h-.969v3h10v-3h-1v-7h1v-3h-10v3h.969v2h-8.969v3h8.969zm3-6h2.031v5h-2.031zm7.031 17h1v3h-14v-3h1c0-1.103.897-2 2-2h8c1.103 0 2 .897 2 2zm1.425-5.562-.85-2.877 3.385-1 .85 2.877zm0 .624 3.385 1-.85 2.877-3.385-1zm-18.235-1.624.85-2.877 3.385 1-.85 2.877zm4.235 4.5-3.385 1-.85-2.877 3.385-1z"/></svg>
);
