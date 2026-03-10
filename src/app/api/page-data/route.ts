import { NextResponse } from 'next/server'
import {
  brand,
  WebResultTag,
  faq,
  achievements,
  onlinePresence,
} from '@/app/types/menu'

const brandList: brand[] = [
  {
    image: '/images/home/brand/adobe.svg',
    darkImg: '/images/home/brand/adobe.svg',
    title: 'Adobe',
  },
  {
    image: '/images/home/brand/framer.svg',
    darkImg: '/images/home/brand/framer.svg',
    title: 'Framer',
  },
  {
    image: '/images/home/brand/shopify.svg',
    darkImg: '/images/home/brand/shopify.svg',
    title: 'Shopify',
  },
  {
    image: '/images/home/brand/figma.svg',
    darkImg: '/images/home/brand/figma.svg',
    title: 'Figma',
  },
  {
    image: '/images/home/brand/dribble.svg',
    darkImg: '/images/home/brand/dribble.svg',
    title: 'Dribbble',
  },
  {
    image: '/images/home/brand/webflow.svg',
    darkImg: '/images/home/brand/webflow.svg',
    title: 'Webflow',
  },
]

const onlinePresenceList: onlinePresence[] = [
  {
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80',
    title: 'Sérum Éclat à l\'Ambre',
    tag: ['Soin visage', 'Anti-âge', 'Éclat naturel'],
    link: '',
    slug: '',
  },
  {
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=800&q=80',
    title: 'Huile Précieuse Corps',
    tag: ['Hydratation', 'Peau satinée', 'Ambre & Karité'],
    link: '',
    slug: '',
  },
  {
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80',
    title: 'Masque Capillaire Réparateur',
    tag: ['Soin cheveux', 'Nutrition intense', 'Brillance'],
    link: '',
    slug: '',
  },
  {
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80',
    title: 'Coffret Rituel Bien-être',
    tag: ['Coffret cadeau', 'Relaxation', 'Ambre naturel'],
    link: '',
    slug: '',
  },
]

const WebResultTagList: WebResultTag[] = [
  {
    image: '/images/home/result/creativity.svg',
    name: 'Ambre',
    bg_color: 'bg-purple/20',
    txt_color: 'text-purple',
  },
  {
    image: '/images/home/result/innovation.svg',
    name: 'Pureté',
    bg_color: 'bg-blue/20',
    txt_color: 'text-blue',
  },
  {
    image: '/images/home/result/strategy.svg',
    name: 'Éclat',
    bg_color: 'bg-orange/20',
    txt_color: 'text-orange',
  },
]

const faqList: faq[] = [
  {
    faq_que: 'Qu\'est-ce que l\'ambre et quels sont ses bienfaits ?',
    faq_ans: 'L\'ambre est une résine fossile aux propriétés apaisantes et régénérantes reconnues depuis des siècles. Chez AMBRA, nous utilisons un extrait d\'ambre purifié, riche en acide succinique, qui favorise l\'éclat naturel de la peau et renforce la fibre capillaire.',
  },
  {
    faq_que: 'Vos produits sont-ils adaptés aux peaux sensibles ?',
    faq_ans: 'Oui, tous nos soins sont formulés avec des ingrédients doux et naturels, testés dermatologiquement. Ils conviennent aux peaux sensibles et ne contiennent ni parabènes, ni sulfates, ni silicones.',
  },
  {
    faq_que: 'D\'où proviennent vos ingrédients ?',
    faq_ans: 'Notre ambre provient de la mer Baltique, reconnue pour la qualité exceptionnelle de ses résines. Les autres ingrédients sont sourcés auprès de producteurs biologiques certifiés, principalement en France et en Europe.',
  },
  {
    faq_que: 'Comment choisir le soin adapté à mon type de peau ?',
    faq_ans: 'Nous proposons un diagnostic personnalisé sur notre site. Vous pouvez également nous contacter directement pour bénéficier de conseils adaptés à vos besoins spécifiques.',
  },
  {
    faq_que: 'Proposez-vous la livraison en France et à l\'international ?',
    faq_ans: 'Oui, nous livrons partout en France métropolitaine sous 48h et à l\'international sous 5 à 7 jours ouvrés. La livraison est offerte en France à partir de 60€ d\'achat.',
  },
]

const achievementsList: achievements[] = [
  {
    icon: '/images/home/achievement/framer_award.svg',
    dark_icon: '/images/home/achievement/dark_framer_award.svg',
    sub_title: 'Certification Bio',
    title: 'Nos formules sont certifiées biologiques et respectent les normes les plus exigeantes.',
    year: '2024',
    url: '#',
  },
  {
    icon: '/images/home/achievement/dribble_award.svg',
    dark_icon: '/images/home/achievement/dribble_award.svg',
    sub_title: 'Cruelty Free',
    title: 'Aucun de nos produits n\'est testé sur les animaux. Beauté éthique garantie.',
    year: '2023',
    url: '#',
  },
  {
    icon: '/images/home/achievement/awward_award.svg',
    dark_icon: '/images/home/achievement/dark_awward_award.svg',
    sub_title: 'Made in France',
    title: 'Tous nos soins sont formulés et fabriqués en France, dans le respect de l\'environnement.',
    year: '2022',
    url: '#',
  },
]

export const GET = async () => {
  return NextResponse.json({
    brandList,
    onlinePresenceList,
    WebResultTagList,
    faqList,
    achievementsList,
  });
};
