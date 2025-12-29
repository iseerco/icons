import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Macarons = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20 8v-.5h1v-2h-1v-.5c0-2.757-2.243-5-5-5h-6c-2.757 0-5 2.243-5 5v.5h-1v2h1v.5c0 1.641.806 3.088 2.031 4-1.225.912-2.031 2.359-2.031 4v.5h-1v2h1v.5c0 2.757 2.243 5 5 5h6c2.757 0 5-2.243 5-5v-.5h1v-2h-1v-.5c0-1.641-.806-3.088-2.031-4 1.225-.912 2.031-2.359 2.031-4zm-2 11c0 1.654-1.346 3-3 3h-6c-1.654 0-3-1.346-3-3v-.5h12zm0-3v.5h-12v-.5c0-1.654 1.346-3 3-3h6c1.654 0 3 1.346 3 3zm0-8c0 1.654-1.346 3-3 3h-6c-1.654 0-3-1.346-3-3v-.5h12zm0-2.5h-12v-.5c0-1.654 1.346-3 3-3h6c1.654 0 3 1.346 3 3z"/></svg>
);
