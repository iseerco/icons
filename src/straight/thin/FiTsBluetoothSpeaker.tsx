import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBluetoothSpeaker = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m8.803 9h-.803v4.29l-2.177-1.839-.646.764 2.715 2.293-2.713 2.276.643.766 2.179-1.828v4.278h.801l3.636-2.963-2.992-2.527 2.99-2.509-3.632-3.001zm2.067 8.023-1.871 1.524v-3.104zm-1.871-3.445v-3.118l1.873 1.547zm10.748-4.644-.496-.869 3.5-2 .496.869zm4.252 3.065v1h-4v-1zm-14.999-11.999c-4.363 0-9 1.052-9 3v18c0 1.948 4.637 3 9 3s9-1.052 9-3v-18c0-1.948-4.637-3-9-3zm8 21c0 .705-3.037 2-8 2s-8-1.295-8-2v-16.576c1.595 1.029 4.864 1.576 8 1.576s6.405-.546 8-1.576zm-8-16c-4.963 0-8-1.295-8-2s3.037-2 8-2 8 1.295 8 2-3.037 2-8 2zm10.748 11.065 3.5 2-.496.869-3.5-2z"/></svg>
);
