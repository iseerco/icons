import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsHardDrive = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16 20c0 .553-.447 1-1 1s-1-.447-1-1 .447-1 1-1 1 .447 1 1zm3-1c-.553 0-1 .447-1 1s.447 1 1 1 1-.447 1-1-.447-1-1-1zm4-2.5v7.5h-22v-7.5l1.785-14.31c.156-1.249 1.222-2.19 2.48-2.19h13.469c1.258 0 2.325.941 2.48 2.19l1.785 14.31zm-20.934-.5h19.867l-1.711-13.686c-.094-.749-.733-1.314-1.488-1.314h-13.468c-.755 0-1.395.565-1.488 1.314l-1.711 13.686zm19.934 7v-6h-20.004l.003 6h20z"/></svg>
);
