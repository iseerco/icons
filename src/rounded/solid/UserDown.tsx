import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UserDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m7.5 16c-3.908 0-7.201 3.042-7.497 6.924-.021.278.074.552.264.756.189.204.455.32.733.32h13c.278 0 .544-.116.733-.32s.285-.478.264-.756c-.296-3.882-3.589-6.924-7.497-6.924zm0-2c3.033 0 5.5-2.467 5.5-5.5s-2.467-5.5-5.5-5.5-5.5 2.467-5.5 5.5 2.467 5.5 5.5 5.5zm15.366-8.293-2.862 2.862c-.277.278-.646.431-1.04.431s-.762-.153-1.039-.431l-2.862-2.862c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0l1.523 1.524v-4.817c0-.552.447-1 1-1s1 .448 1 1v4.745l1.452-1.452c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414z"/></svg>
);
