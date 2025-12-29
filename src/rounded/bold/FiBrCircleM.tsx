import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrCircleM = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,21c-4.962,0-9-4.037-9-9S7.038,3,12,3s9,4.037,9,9-4.038,9-9,9Zm6-12.349v7.599c0,.828-.671,1.5-1.5,1.5s-1.5-.672-1.5-1.5v-4.899l-1.706,2.911c-.269.459-.762.741-1.294.741h-.006c-.535-.002-1.028-.289-1.294-.752l-1.7-2.954v4.953c0,.828-.671,1.5-1.5,1.5s-1.5-.672-1.5-1.5v-7.443c0-1.241.723-2.246,1.799-2.5,1.009-.236,2.031.289,2.542,1.312l1.669,2.898,1.695-2.892c.496-.999,1.566-1.564,2.605-1.318,1.01.238,1.688,1.181,1.688,2.345Z"/></svg>

);
