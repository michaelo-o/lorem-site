import Link from "next/link";
import Image from "next/dist/client/image";
const Footer = () => {
    return (
        <div className="footer">
            <div className="backtotop">
                <Link href="/">
                    <a>
                        <p>Back To Home/Top <Image src="/backtotop-greyish.png" width={20} height={20} /></p>
                    </a>
                </Link>
            </div>
            <div className="copyright">
                <p>© 2021 Copyright</p>
            </div>
            <div className="project">
                <p>
                    A Side Project by
                    <Link href="https://web.facebook.com/michael.okwuosah/">
                        <a target="_blank"> Michael Okwuosah</a>
                    </Link>
                </p>

                <p>
                    Definition and History are from
                    <Link href="https://loremipsum.io/">
                        <a target="_blank"> Lorem Ipsum.io</a>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Footer;
