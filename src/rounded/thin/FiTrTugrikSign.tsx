import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrTugrikSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,.5c0,.28-.22,.5-.5,.5H12.5V9.31l6.84-2.28c.26-.09,.54,.05,.63,.32,.09,.26-.05,.54-.32,.63l-7.16,2.39v2.95l6.84-2.28c.26-.09,.54,.05,.63,.32,.09,.26-.05,.54-.32,.63l-7.16,2.39v9.14c0,.28-.22,.5-.5,.5s-.5-.22-.5-.5V14.69l-6.84,2.28c-.05,.02-.11,.03-.16,.03-.21,0-.4-.13-.47-.34-.09-.26,.05-.54,.32-.63l7.16-2.39v-2.95l-6.84,2.28c-.05,.02-.11,.03-.16,.03-.21,0-.4-.13-.47-.34-.09-.26,.05-.54,.32-.63l7.16-2.39V1H2.5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5H21c.28,0,.5,.22,.5,.5Z"/></svg>

);
