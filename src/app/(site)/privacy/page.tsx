"use client";

import Image from "next/image";
import Link from "next/link";

export default function PrivacyPolicyPage() {
    return (
        <>
            {/* HERO SECTION - Same style as other pages */}
            <section className="font-apfel2 relative min-h-[55vh] sm:min-h-[65vh] md:min-h-[70vh] flex items-center pt-[20px] sm:pt-[100px] md:pt-[120px]">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000"
                        alt="Privacy Policy hero"
                        fill
                        sizes="100vw"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/75 sm:bg-black/70 md:bg-black/65" />
                </div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
                    <div className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl text-white">
                        <p className="text-yellow-400 tracking-widest mb-2 sm:mb-3 text-xs sm:text-sm uppercase">
                            LEGAL
                        </p>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] leading-[1.1] sm:leading-[1.05] font-medium font-apfel2 mb-3 sm:mb-4 md:mb-6">
                            Privacy Policy
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-white/85 sm:text-white/90 mb-5 sm:mb-6 md:mb-8 max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl">
                            Updated March 18, 2025 - Our commitment to protecting your privacy and personal information.
                        </p>
                    </div>
                </div>
            </section>

            {/* BREADCRUMB */}
            <div className="bg-[#edf3f5] border-b border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 py-3 sm:py-4">
                    <nav className="flex items-center text-xs sm:text-sm text-gray-600">
                        <Link href="/" className="hover:text-red-600">
                            HOME
                        </Link>
                        <span className="mx-1.5 sm:mx-2">&gt;</span>
                        <span className="text-red-600 font-semibold uppercase">
                            PRIVACY POLICY
                        </span>
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <section className="bg-white py-10 sm:py-14 md:py-20">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
                    <div className="max-w-4xl mx-auto">
                        {/* Introduction */}
                        <div className="mb-8 sm:mb-12">
                            <p className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px] mb-4">
                                This website is operated by and on behalf of A&T Corporation – including its affiliates, divisions, business units and subsidiaries – ("A&T").
                            </p>
                            <p className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px] mb-4">
                                This privacy policy applies to personal information A&T may collect about you through its websites, apps, or other online media under its operation and control (collectively, the "Site") and to other information we may collect about you in the course of our business. It does not apply to personal information we collect about A&T's employees, and we have a separate Applicant Privacy Statement in relation to personal information regarding candidates for employment with A&T.
                            </p>
                            <p className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px]">
                                A&T recognizes and respects the privacy of the individuals whose personal information it collects, uses and otherwise processes in the course of its business.
                            </p>
                        </div>

                        {/* Categories of Personal Information */}
                        <div className="mb-8 sm:mb-12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-apfel2 font-normal text-gray-900 mb-4 sm:mb-6">
                                Categories of Personal Information We Collect
                            </h2>
                            <ul className="space-y-3 list-disc list-outside ml-5">
                                <li className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px] pl-2">
                                    <strong>Identifiers.</strong> Examples include name, telephone number, postal and email addresses, IP address and other similar identifiers.
                                </li>
                                <li className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px] pl-2">
                                    <strong>Internet/Network information.</strong> Examples include browsing history, search history, and information regarding your interaction with the Site.
                                </li>
                                <li className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px] pl-2">
                                    <strong>Audio, electronic, visual, thermal, or similar information.</strong> Examples include security surveillance and thermal imaging cameras at A&T offices or jobsites.
                                </li>
                                <li className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px] pl-2">
                                    Professional or employment-related information.
                                </li>
                                <li className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px] pl-2">
                                    Education information.
                                </li>
                            </ul>
                        </div>

                        {/* Sources of Personal Information */}
                        <div className="mb-8 sm:mb-12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-apfel2 font-normal text-gray-900 mb-4 sm:mb-6">
                                Sources of Personal Information
                            </h2>

                            <h3 className="text-xl sm:text-2xl md:text-3xl font-apfel2 font-normal text-gray-900 mb-3 sm:mb-4">
                                Personal information you provide
                            </h3>
                            <p className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px] mb-6">
                                A&T collects personal information about individuals when specifically and knowingly provided by such individuals for purposes disclosed or otherwise known to them when they provide their information or for the wider purposes set out below. This includes, for example, voluntary submission of an email address for our news email update list, providing a business card in a meeting, sending us an email which includes personal information about you, providing basic details for building security purposes when you enter A&T premises, or allowing us to photograph, film or otherwise record you when you attend an event that we host or sponsor.
                            </p>
                            <p className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px] mb-6">
                                Unless we explain otherwise at the time, providing personal information that we request is optional and disclosures are made voluntarily.
                            </p>

                            <h3 className="text-xl sm:text-2xl md:text-3xl font-apfel2 font-normal text-gray-900 mb-3 sm:mb-4">
                                Automatic collection of your personal information
                            </h3>
                            <p className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px] mb-4">
                                We collect certain information by automated means when you visit our premises or websites. In particular:
                            </p>
                            <ul className="space-y-3 list-disc list-outside ml-5 mb-6">
                                <li className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px] pl-2">
                                    Our websites log IP addresses, the type of operating system that the visitor's computer uses, the type of browser software used by the visitor, and the pages accessed by the visitor.
                                </li>
                                <li className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px] pl-2">
                                    A&T uses this data, in aggregated form, to perform statistical analyses of the collective characteristics and behaviour of our visitors and to measure overall user demographics and interests regarding specific areas of the site.
                                </li>
                                <li className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px] pl-2">
                                    Our websites also use Google Analytics, a web analytics service provided by Google, Inc. ("Google"). Google Analytics uses cookies to help the website analyze how users use the site. The information generated by the cookie about your use of the website (including your IP address) will be transmitted to and stored by Google on servers in the United States. Google will use this information for evaluating your use of the website, compiling reports on website activity, and providing other services relating to website activity and internet usage for us and our affiliates. Google may also transfer this information to third parties where required to do so by law, or where such third parties process the information on Google's behalf. Google will not associate your IP address with any other data held by Google. See Google's Privacy Policy for more information.
                                </li>
                            </ul>
                            <p className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px] mb-6">
                                You may refuse the use of cookies by selecting the appropriate settings on your browser, however, please note that if you do this you may not be able to use the full functionality of this website. By using this website, you consent to the processing of data about you by Google in the manner and for the purposes set out herein.
                            </p>

                            <h3 className="text-xl sm:text-2xl md:text-3xl font-apfel2 font-normal text-gray-900 mb-3 sm:mb-4">
                                Collection of your personal information from third party sources
                            </h3>
                            <p className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px]">
                                If you are involved in a business relationship with us, we may also obtain some limited information about you indirectly, for example when your colleagues give us your contact details and information about your role, or from publicly available sources such as the Internet and/or subscription-based services.
                            </p>
                        </div>

                        {/* Use of Your Personal Information */}
                        <div className="mb-8 sm:mb-12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-apfel2 font-normal text-gray-900 mb-4 sm:mb-6">
                                Use of Your Personal Information
                            </h2>
                            <p className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px] mb-4">
                                We may use the information we collect about you for purposes which are made clear to you (or which you already know) when you provide your information or for the following purposes:
                            </p>

                            <h3 className="text-xl sm:text-2xl md:text-3xl font-apfel2 font-normal text-gray-900 mb-3 sm:mb-4">
                                Business-related purposes
                            </h3>
                            <ul className="space-y-2 list-disc list-outside ml-5 mb-6">
                                <li className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px] pl-2">
                                    auditing consumer interactions, including measuring how users interact with the Site;
                                </li>
                                <li className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px] pl-2">
                                    protecting the security and integrity of our premises, websites and other information technology systems (including protecting against malicious, deceptive, fraudulent or illegal activity, and prosecuting those responsible for that activity);
                                </li>
                                <li className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px] pl-2">
                                    debugging to identify and repair errors that impair existing intended functionality;
                                </li>
                                <li className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px] pl-2">
                                    responding to and communicating with you about your requests for information, questions and comments;
                                </li>
                                <li className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px] pl-2">
                                    managing and developing our relationship with you and the organization that you represent; and
                                </li>
                                <li className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px] pl-2">
                                    operating, evaluating and improving our business.
                                </li>
                            </ul>

                            <h3 className="text-xl sm:text-2xl md:text-3xl font-apfel2 font-normal text-gray-900 mb-3 sm:mb-4">
                                Legal and compliance purposes
                            </h3>
                            <ul className="space-y-2 list-disc list-outside ml-5 mb-6">
                                <li className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px] pl-2">
                                    protecting ourselves and our employees and business counterparties against fraud and other criminal activity, and co-operating with law enforcement and other regulatory agencies;
                                </li>
                                <li className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px] pl-2">
                                    exercising and defending our legal rights and legal claims made against us; and
                                </li>
                                <li className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px] pl-2">
                                    complying with our legal and regulatory obligations.
                                </li>
                            </ul>

                            <p className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px] mb-4">
                                A&T does not trade, sell, share, or rent personal information but may collect or provide aggregate statistics about its websites and their users to other parties who do not provide services directly to A&T.
                            </p>
                            <p className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px]">
                                Except in rare circumstances where A&T is required by law to disclose or otherwise process your personal information, A&T will only process your personal information as necessary for the purposes explained to you when the information is collected or otherwise set out in this policy. A&T will not collect your personal information unless it has concluded that it has a legitimate interest in pursuing the relevant purpose. We may occasionally ask for your consent to allow us to process your personal information – for example, if we wish to use images of you in published materials relating to an event that you attended.
                            </p>
                        </div>

                        {/* Contact Us */}
                        <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-gray-50 rounded-lg">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-apfel2 font-normal text-gray-900 mb-4 sm:mb-6">
                                Contact Us
                            </h2>
                            <p className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px] mb-4">
                                If you have any questions or comments regarding this Privacy Policy or our information collection practices, please contact us by sending an email to A&T's Chief Privacy Officer at:
                            </p>
                            <p className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 mb-6">
                                <a href="mailto:at@gmail.com" className="text-red-600 hover:underline">
                                    at@gmail.com
                                </a>
                            </p>
                            <p className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px]">
                                or by writing to:<br />
                                <br />
                                A&T Global Corporation<br />
                                12011 Sunset Hills Road<br />
                                Suite 110<br />
                                Reston, VA 20190
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}