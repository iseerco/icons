import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WineGlassCrack = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,9V3c0-1.654-1.346-3-3-3h-1.753l-2.846,4h1.994c.592,0,1.133,.324,1.413,.845,.28,.521,.251,1.152-.076,1.646l-1.882,3.037c-.189,.305-.517,.473-.851,.473-.18,0-.362-.049-.526-.15-.469-.291-.614-.907-.323-1.377l1.533-2.473h-2.068c-.509,0-.994-.244-1.297-.652-.303-.409-.396-.944-.249-1.431,.031-.104,2.722-3.917,2.722-3.917h-3.792c-1.654,0-3,1.346-3,3v6c0,3.52,2.612,6.441,6,6.928v6.072h-3c-.552,0-1,.447-1,1s.448,1,1,1h8c.552,0,1-.447,1-1s-.448-1-1-1h-3v-6.072c3.388-.487,6-3.408,6-6.928Z"/></svg>

);
