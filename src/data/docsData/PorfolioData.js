const isGitHubPages = window.location.hostname.includes('github.io');
const repoName = '/Curriculum-js';

export const PorfolioDataPDF = [
    {
        atitle: 'Go back to Home',
        title: 'Download PDF',
        src: isGitHubPages ? `${repoName}/cv-ing-sist-com.pdf` : './cv-ing-sist-com.pdf',
    },
];