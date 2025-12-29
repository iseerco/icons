import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BuildingFoundation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19 0v4.03l-6-3.135v-.895h-2v.895l-6 3.135v-4.03h-2v19.642l8.272 4.358h1.456l8.272-4.358v-19.642zm-.548 6-5.452 2.849v-5.698zm-7.452 11.349-5.452-2.849 5.452-2.849v5.699zm2-5.699 5.452 2.849-5.452 2.849v-5.699zm-2-8.499v5.699l-5.452-2.849 5.452-2.849zm-6 4.819 4.363 2.28-4.363 2.28zm14 10.465-6.767 3.565h-.466l-6.767-3.565v-1.965l7 3.658 7-3.658zm0-5.905-4.363-2.28 4.363-2.28z"/></svg>
);
