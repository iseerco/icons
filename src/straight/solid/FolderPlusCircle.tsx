import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FolderPlusCircle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M0,6V3C0,1.346,1.346,0,3,0h5.236l4,2h8.764c1.654,0,3,1.346,3,3v1H0Zm24,12c0,3.314-2.686,6-6,6s-6-2.686-6-6,2.686-6,6-6,6,2.686,6,6Zm-2-1h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2Zm-12,1c0-4.418,3.582-8,8-8,2.393,0,4.534,1.056,6,2.721v-4.721H0v14H11.079c-.682-1.178-1.079-2.541-1.079-4Z"/>
</svg>

);
