import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrTimelineArrow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.717 12.685-3.063 3.063c-.61.61-1.653.178-1.653-.685v-1.563h-9.001v3.5h.5c.828 0 1.5.672 1.5 1.5v4c0 .828-.672 1.5-1.5 1.5h-4c-.828 0-1.5-.672-1.5-1.5v-4c0-.828.672-1.5 1.5-1.5h.5v-3.5h-5.5c-.829 0-1.5-.672-1.5-1.5s.671-1.5 1.5-1.5h.5v-3.5h-.5c-.828 0-1.5-.672-1.5-1.5v-4c0-.828.672-1.5 1.5-1.5h4c.828 0 1.5.672 1.5 1.5v4c0 .828-.672 1.5-1.5 1.5h-.5v3.5h7v-3.5h-.5c-.828 0-1.5-.672-1.5-1.5v-4c0-.828.672-1.5 1.5-1.5h4c.828 0 1.5.672 1.5 1.5v4c0 .828-.672 1.5-1.5 1.5h-.5v3.5h4.001v-1.563c0-.863 1.043-1.295 1.653-.685l3.063 3.063c.378.378.378.991 0 1.369z"/></svg>
);
