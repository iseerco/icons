import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LandmarkAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,22v2H0v-2H24Zm-1-2H1v-2H3v-6H1v-2H3.056c.463-4.165,3.779-7.482,7.944-7.944V0h2V2.056c4.165,.463,7.482,3.779,7.944,7.944h2.056v2h-2v6h2v2Zm-4-8h-3v6h3v-6Zm-9,0v6h4v-6h-4Zm-4.928-2h13.857c-.487-3.388-3.408-6-6.928-6s-6.441,2.612-6.928,6Zm-.072,8h3v-6h-3v6Z"/></svg>

);
