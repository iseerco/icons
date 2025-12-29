import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BuildingMaterials = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m6 24h-6v-2h6zm8-2h-6v2h6zm-10-2h6v-2h-6zm20-4c-.797 0-2.324-.625-3.719-1.726-1.076-.85-2.05-1.975-2.566-3.274h2.232c.411.66.974 1.226 1.555 1.686l.002-.003c.581.457 1.205.849 1.878 1.131l.58-4.815h-14.924l.844 7h2.118v4h4v4h6.154l.742-6.158c.406.101.781.158 1.104.158v-2zm-17.217-9h12.971c-.44-4.331-.729-5.089-1.022-6.363-1.186-.151-3.662-.588-8.231-.637-4.578.049-7.064.486-8.259.636-.291 1.329-1.174 4.213-1.255 11.629 0 1.336.045 2.584.115 3.735h6.765l-1.085-9z"/></svg>
);
