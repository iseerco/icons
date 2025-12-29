import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrTravelerCamera = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 23s0 1-1 1h-4v-4.501c-.001-.828-.672-1.499-1.5-1.499h-.5l-.141-.281c-.22-.44-.67-.719-1.163-.719h-1.393c-.492 0-.943.278-1.163.719l-.141.281h-.499c-.828 0-1.5.672-1.5 1.5v4.5h-4c-.808 0-1-1-1-1 0-4.971 4.029-9 9-9s9 4.029 9 9zm-9-3.5c-.829 0-1.5.671-1.5 1.5s.671 1.5 1.5 1.5 1.5-.671 1.5-1.5-.671-1.5-1.5-1.5zm-8-15c0-.828.672-1.5 1.5-1.5h1.167l.278-.625c.642-1.445 2.074-2.375 3.655-2.375h2.801c1.581 0 3.013.931 3.655 2.375l.278.625h1.167c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5h-.5c0 3.309-2.691 6-6 6s-6-2.691-6-6h-.5c-.828 0-1.5-.672-1.5-1.5zm11 1.5h-6c0 1.654 1.346 3 3 3s3-1.346 3-3z"/></svg>
);
