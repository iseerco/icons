import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FilmSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8,20v-7.758L2,6.243v15.758H4v-3h2v3h11.757l-2-2H8Zm-2-9v2H4v-2h2Zm-2,6v-2h2v2H4Zm18,3.587V2h-2v3h-2V2H6v2.587L1.456,.043,.042,1.458,22.542,23.958l1.414-1.414-1.956-1.956Zm-2-7.587h-2v-2h2v2Zm-4,1.587l-1.587-1.587h1.587v1.587Zm2,.413h2v2h-1.587l-.413-.413v-1.587Zm2-8v2h-2v-2h2Zm-12-3h8v7h-3.587l-4.413-4.413v-2.587Z"/></svg>

);
