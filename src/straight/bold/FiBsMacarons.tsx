import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMacarons = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20 8h1v-3h-1c0-2.757-2.243-5-5-5h-6c-2.757 0-5 2.243-5 5h-1v3h1c0 1.641.806 3.088 2.031 4-1.225.912-2.031 2.359-2.031 4h-1v3h1c0 2.757 2.243 5 5 5h6c2.757 0 5-2.243 5-5h1v-3h-1c0-1.641-.806-3.088-2.031-4 1.225-.912 2.031-2.359 2.031-4zm-11-5h6c1.103 0 2 .897 2 2h-10c0-1.103.897-2 2-2zm8 5c0 1.103-.897 2-2 2h-6c-1.103 0-2-.897-2-2zm-2 13h-6c-1.103 0-2-.897-2-2h10c0 1.103-.897 2-2 2zm-8-5c0-1.103.897-2 2-2h6c1.103 0 2 .897 2 2z"/></svg>
);
