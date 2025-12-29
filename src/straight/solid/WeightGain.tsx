import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WeightGain = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18 12c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm1 6v3h-2v-3h-2.454l2.687-2.687c.417-.417 1.093-.417 1.51 0l2.688 2.687zm-6.274 6h-12.726v-19c0-1.654 1.346-3 3-3h2.685c-.435.911-.685 1.926-.685 3v4h14v-4c0-1.074-.251-2.089-.685-3h2.685c1.654 0 3 1.346 3 3v7.726c-1.467-1.667-3.61-2.726-6-2.726-4.411 0-8 3.589-8 8 0 2.39 1.059 4.533 2.726 6zm-2.884-17h-2.842v-2c0-2.761 2.239-5 5-5s5 2.239 5 5v2h-4.913l1.805-3.547-1.783-.906-2.266 4.453z"/></svg>
);
