import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsProteinShake = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16.419 2h-5.419v-2h-3v2h-.419c-1.291 0-2.438.826-2.846 2.051l-.735 2.206v1.743l1.1 16h13.801l1.096-15.896.004-1.847-.735-2.206c-.408-1.225-1.555-2.051-2.846-2.051zm-8.519 19-.138-2h2.238v-3h-2.445l-.138-2h2.583v-3h-2.789l-.207-3h9.993l-.897 13z"/></svg>
);
