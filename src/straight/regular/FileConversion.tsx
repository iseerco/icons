import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FileConversion = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m9 5v-3h-5v10h4v2h-6v-12c0-1.103.897-2 2-2h6.825l3.175 3.082v4.918h-2v-3zm9.825 5 3.175 3.082v10.918h-12v-12c0-1.103.897-2 2-2zm1.175 12v-7h-3v-3h-5v10zm1-19h-1.996l1.499-1.499-1.414-1.414-2.508 2.507c-.773.775-.773 2.037 0 2.812l2.507 2.506 1.414-1.414-1.508-1.499h2.005c.552 0 1 .449 1 1v2h2v-2c0-1.654-1.346-3-3-3zm-16.089 13.088-1.414 1.414 1.508 1.498h-2.005c-.552 0-1-.448-1-1v-2h-2v2c0 1.654 1.346 3 3 3h1.996l-1.499 1.498 1.414 1.414 2.508-2.507c.773-.774.773-2.036 0-2.812l-2.507-2.506z"/></svg>
);
