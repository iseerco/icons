import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FitnessTime = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 18v2h-1v2h-2v-6h2v2zm-17-2v2h-1v2h1v2h2v-6zm11-2v4h-6v-4h-2v10h2v-4h6v4h2v-10zm-8-14c-5.514 0-10 4.486-10 10 0 3.261 1.577 6.154 4 7.981v-2.707c-1.241-1.41-2-3.253-2-5.274 0-4.411 3.589-8 8-8s8 3.589 8 8c0 .692-.097 1.359-.263 2h2.062c.132-.646.202-1.315.202-2-.001-5.514-4.487-10-10.001-10zm1 5h-2v4h-3v2h5z"/></svg>
);
