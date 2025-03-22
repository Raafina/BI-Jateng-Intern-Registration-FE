import { CiStar, CiViewList, CiGrid41 } from 'react-icons/ci';

const SIDEBAR_ADMIN = [
  {
    key: 'event',
    label: 'Beranda',
    href: '/beranda',
    icon: <CiGrid41 />,
  },
  {
    key: 'category',
    label: 'Data Pendaftar',
    href: '/beranda/data-pendaftar',
    icon: <CiViewList />,
  },
  {
    key: 'banner',
    label: 'Hasil Seleksi ',
    href: '/beranda/hasil-seleksi',
    icon: <CiStar />,
  },
];

export { SIDEBAR_ADMIN };
