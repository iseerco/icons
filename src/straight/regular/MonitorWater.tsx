import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MonitorWater = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15.464 10.536c.945.944 2.201 1.464 3.536 1.464s2.591-.52 3.535-1.464c1.95-1.95 1.95-5.122-.008-7.079l-3.527-3.457-3.536 3.464c-1.949 1.95-1.949 5.122 0 7.072zm1.407-5.65 2.129-2.082 2.121 2.074c1.17 1.17 1.17 3.073 0 4.243-1.133 1.133-3.109 1.133-4.243 0-1.169-1.17-1.169-3.073-.008-4.235zm7.129 7.008v8.106h-11v2h5v2h-12v-2h5v-2h-11v-15c0-1.654 1.346-3 3-3h11.102c-.604.589-1.073 1.276-1.415 2h-9.687c-.551 0-1 .449-1 1v13h20v-4.684c.713-.339 1.375-.791 1.949-1.366.018-.018.033-.038.051-.056z"/></svg>
);
