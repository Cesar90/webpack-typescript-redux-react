import React from 'react';
import { useTranslation } from 'react-i18next';

function AboutPage() {
    const { t } = useTranslation('about');
    return (
        <div>
            {t('About us')}
        </div>
    );
}

export default AboutPage;
