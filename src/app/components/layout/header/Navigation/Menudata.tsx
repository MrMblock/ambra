import { HeaderItem } from "../../../../types/menu";
import { useTranslations } from 'next-intl';

export const useHeaderData = (): HeaderItem[] => {
    const t = useTranslations('nav');
    return [
        { label: t('home'), href: '/' },
        { label: t('brand'), href: '/#lamarque' },
        { label: t('products'), href: '/#produits' },
        { label: t('advice'), href: '/#conseils' },
        { label: t('contact'), href: '/#contact' },
    ];
};
