import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {
    return (
        <Link href="/" className="flex items-center gap-2 select-none">
            <Image
                src="/images/logo/logo.png"
                alt="AMBRA logo"
                width={50}
                height={50}
                style={{ width: '50px', height: '50px' }}
                quality={100}
                priority={true}
            />
            <span className="text-2xl font-bold tracking-wide text-black dark:text-white" style={{ fontFamily: "'Felix Titling', serif" }}>AMBRA</span>
        </Link>
    );
};

export default Logo;
