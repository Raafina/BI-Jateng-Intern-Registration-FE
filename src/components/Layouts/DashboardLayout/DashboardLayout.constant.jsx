import { CiStar, CiViewList, CiGrid41, CiMicrochip } from 'react-icons/ci';

const SIDEBAR_ADMIN = [
  {
    key: 'event',
    label: 'Beranda',
    href: '/beranda',
    icon: <CiGrid41 />,
  },
  {
    key: 'bobot',
    label: 'Bobot',
    href: '/bobot',
    icon: <CiMicrochip />,
  },
  {
    key: 'category',
    label: 'Data Pendaftar',
    href: '/data-pendaftar',
    icon: <CiViewList />,
  },
  {
    key: 'banner',
    label: 'Hasil Seleksi ',
    href: '/hasil-seleksi',
    icon: <CiStar />,
  },
];

export { SIDEBAR_ADMIN };
