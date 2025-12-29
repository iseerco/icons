import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsStarAndCrescent = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m10,12c0-3.783,2.42-7.178,6.021-8.45l3.547-1.252-3.435-1.532c-1.155-.516-2.507-.766-4.134-.766C5.383,0,0,5.383,0,12s5.383,12,12,12c1.621,0,2.848-.226,4.101-.756l3.562-1.506-3.646-1.29c-3.599-1.273-6.017-4.668-6.017-8.448Zm-7,0C3,7.354,6.537,3.52,11.061,3.049c-2.526,2.229-4.061,5.466-4.061,8.951s1.534,6.722,4.061,8.951c-4.523-.471-8.061-4.306-8.061-8.951Zm21-1.167l-2.545,1.736,1.059,3.319-.682.476-2.819-1.948-2.776,1.948-.656-.494.984-3.351-2.566-1.68v-.839h3.5l1.07-3.636h.882l1.069,3.636h3.478v.833Z"/></svg>

);
