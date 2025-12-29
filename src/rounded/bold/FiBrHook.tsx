import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrHook = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20 16c0 4.411-3.589 8-8 8s-8-3.589-8-8v-2.11c0-.791.956-1.187 1.516-.628.358.352.834.821 1.091 1.233.242.266.394.617.394 1.005v.5c0 2.757 2.243 5 5 5s5-2.243 5-5c0-1.822-.993-3.502-2.592-4.383-2.447-1.349-3.908-3.689-3.908-6.262v-.866c-.604-.456-1-1.173-1-1.989 0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5c0 .815-.396 1.532-1 1.989v.866c0 1.462.881 2.821 2.356 3.635 2.556 1.409 4.144 4.095 4.144 7.01z"/></svg>
);
