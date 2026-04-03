// Toggle mobile menu
function toggleMenu() {
    const navUl = document.querySelector('.nav-ul');
    navUl.style.display = navUl.style.display === 'flex' ? 'none' : 'flex';
}

// Scroll to next section step by step
function scrollToNextSection() {
    const sections = ['hero', 'about', 'domains', 'director', 'conditions', 'cta'];
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;

    // Find current section based on scroll position
    let currentIdx = 0;
    for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
            const sectionTop = section.offsetTop;
            if (scrollTop >= sectionTop - windowHeight / 2) {
                currentIdx = i;
            }
        }
    }

    // Scroll to next section
    const nextIdx = currentIdx + 1;
    if (nextIdx < sections.length) {
        const nextSection = document.getElementById(sections[nextIdx]);
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// Reveal on scroll
function revealOnScroll() {
    const reveals = document.querySelectorAll('.rv');
    const windowHeight = window.innerHeight;

    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('on');
        }
    });
}

// Modal functions
function openModal() {
    const modal = document.getElementById('form-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(event) {
    if (event && event.target !== event.currentTarget) return;
    const modal = document.getElementById('form-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// ===== INTERNATIONALIZATION =====
let currentLang = localStorage.getItem('lang') || 'fr';

const translations = {
    // NAV
    'nav.about': { fr: 'À Propos', en: 'About' },
    'nav.domains': { fr: 'Domaines', en: 'Fields' },
    'nav.director': { fr: 'Directeur', en: 'Director' },
    'nav.conditions': { fr: 'Conditions', en: 'Requirements' },
    'nav.register': { fr: "S'inscrire", en: 'Register Now' },
    'nav.lang_label': { fr: 'EN', en: 'FR' },

    // LOGO
    'logo.name': { fr: 'Xam Xam Elite', en: 'Xam Xam Elite' },
    'logo.tagline': { fr: 'Recrutement WALDY', en: 'WALDY Recruitment' },

    // HERO
    'hero.badge': { fr: 'Dakar, Sénégal · Promo 2025', en: 'Dakar, Senegal · Class of 2025' },
    'hero.title_html': { fr: 'Formation<br><em>Accélérée</em><br>d\'Excellence', en: 'Accelerated<br><em>Training</em><br>of Excellence' },
    'hero.subtitle_html': { fr: '<strong>6 mois</strong> pour transformer votre diplôme en expertise opérationnelle reconnue dans le monde des affaires.', en: '<strong>6 months</strong> to transform your diploma into recognized operational expertise in the business world.' },
    'hero.cta_register': { fr: "S'inscrire Maintenant", en: 'Register Now' },
    'hero.cta_domains': { fr: 'Voir les Domaines', en: 'See Fields' },
    'hero.chip_months': { fr: 'Mois', en: 'Months' },
    'hero.chip_domains': { fr: 'Domaines', en: 'Fields' },
    'hero.chip_internship': { fr: 'Stage Rémunéré', en: 'Paid Internship' },

    // ABOUT
    'about.stag': { fr: 'Notre Mission', en: 'Our Mission' },
    'about.title_html': { fr: 'Excellence en <em>Intelligence</em><br>dans le Monde des Affaires', en: 'Excellence in <em>Intelligence</em><br>in the Business World' },
    'about.p1_html': { fr: 'Le programme <strong style="color:var(--gold)">XAM XAM Élite</strong> est une formation d\'excellence destinée aux étudiants, jeunes diplômés et cadres souhaitant renforcer leurs compétences dans des domaines stratégiques tels que l\'Intelligence Artificielle, l\'analyse des données, la gestion et la prise de décision.', en: 'The <strong style="color:var(--gold)">XAM XAM Élite</strong> program is a training of excellence designed for students, young graduates and professionals wishing to strengthen their skills in strategic areas such as Artificial Intelligence, data analysis, management and decision-making.' },
    'about.p2': { fr: 'Ce programme intensif vise à développer des compétences techniques, méthodologiques et professionnelles adaptées aux exigences actuelles du marché.', en: 'This intensive program aims to develop technical, methodological and professional skills adapted to current market demands.' },
    'about.p3': { fr: 'À l\'issue de la formation, les candidats les plus performants pourront bénéficier d\'opportunités d\'intégration professionnelle dans des projets structurés.', en: 'Upon completion of the training, the most performing candidates may benefit from professional integration opportunities in structured projects.' },
    'about.hi1': { fr: 'Formation Académique de Haut Niveau', en: 'High-Level Academic Training' },
    'about.hi1_desc': { fr: '3 mois en formation accélérée dans votre domaine', en: '3 months of accelerated training in your field' },
    'about.hi2': { fr: 'Développement de Performance', en: 'Performance Development' },
    'about.hi2_desc': { fr: '3 mois en stratégie, leadership et compétences avancées', en: '3 months in strategy, leadership and advanced skills' },
    'about.hi3': { fr: 'Stage Professionnel Rémunéré', en: 'Paid Professional Internship' },
    'about.hi3_desc': { fr: 'Une expérience terrain pour consolider votre expertise', en: 'A field experience to consolidate your expertise' },
    'about.elite_badge': { fr: 'Élite', en: 'Elite' },
    'about.elite_training': { fr: 'Formation', en: 'Training' },

    // DOMAINS
    'domains.stag': { fr: 'Nos Spécialités', en: 'Our Specialties' },
    'domains.title_html': { fr: 'Les Domaines <em>Spécifiques</em>', en: '<em>Specific</em> Fields' },
    'domains.subtitle': { fr: '20+ domaines de formation spécialisée pour construire votre expertise d\'élite', en: '20+ specialized training fields to build your elite expertise' },
    'domains.brochure_dl': { fr: 'Télécharger la brochure', en: 'Download brochure' },

    // Domain cards
    'domains.marketing.title': { fr: 'Marketing', en: 'Marketing' },
    'domains.marketing.desc': { fr: 'Stratégies marketing digitales et traditionnelles', en: 'Digital and traditional marketing strategies' },
    'domains.intl_commerce.title': { fr: 'Commerce International', en: 'International Commerce' },
    'domains.intl_commerce.desc': { fr: 'Échanges commerciaux et marchés mondiaux', en: 'Trade exchanges and global markets' },
    'domains.project_mgmt.title': { fr: 'Gestion des Projets', en: 'Project Management' },
    'domains.project_mgmt.desc': { fr: 'Pilotage et management de projets complexes', en: 'Leading and managing complex projects' },
    'domains.mba.title': { fr: 'MBA', en: 'MBA' },
    'domains.mba.desc': { fr: 'Management et administration des affaires', en: 'Management and business administration' },
    'domains.mbo.title': { fr: 'MBO', en: 'MBO' },
    'domains.mbo.desc': { fr: 'Management par objectifs et performance', en: 'Management by objectives and performance' },
    'domains.financial_analyst.title': { fr: 'Analyste Financier', en: 'Financial Analyst' },
    'domains.financial_analyst.desc': { fr: 'Analyse et évaluation des marchés financiers', en: 'Analysis and evaluation of financial markets' },
    'domains.accounting.title': { fr: 'Comptabilité', en: 'Accounting' },
    'domains.accounting.desc': { fr: 'Gestion financière et comptabilité d\'entreprise', en: 'Financial management and business accounting' },
    'domains.cybersecurity.title': { fr: 'Cyber-Sécurité', en: 'Cybersecurity' },
    'domains.cybersecurity.desc': { fr: 'Protection des systèmes et données numériques', en: 'Protection of digital systems and data' },
    'domains.warehousing.title': { fr: 'Entreposage', en: 'Warehousing' },
    'domains.warehousing.desc': { fr: 'Gestion des stocks et logistique d\'entrepôt', en: 'Inventory management and warehouse logistics' },
    'domains.financial_engineer.title': { fr: 'Ingénieur Financier', en: 'Financial Engineer' },
    'domains.financial_engineer.desc': { fr: 'Conception de produits et solutions financières', en: 'Design of financial products and solutions' },
    'domains.transport_logistics.title': { fr: 'Transport Logistique', en: 'Transport Logistics' },
    'domains.transport_logistics.desc': { fr: 'Chaîne d\'approvisionnement et flux logistiques', en: 'Supply chain and logistics flows' },
    'domains.management_control.title': { fr: 'Contrôle de Gestion', en: 'Management Control' },
    'domains.management_control.desc': { fr: 'Pilotage de la performance organisationnelle', en: 'Organizational performance management' },
    'domains.it.title': { fr: 'Informatique', en: 'IT' },
    'domains.it.desc': { fr: 'Systèmes informatiques et nouvelles technologies', en: 'Computer systems and new technologies' },
    'domains.hr.title': { fr: 'Ressources Humaines', en: 'Human Resources' },
    'domains.hr.desc': { fr: 'Gestion des talents et développement RH', en: 'Talent management and HR development' },
    'domains.payment_engineer.title': { fr: 'Ingénieur en Monétique', en: 'Payment Systems Engineer' },
    'domains.payment_engineer.desc': { fr: 'Systèmes de paiement électronique', en: 'Electronic payment systems' },
    'domains.certification_engineer.title': { fr: 'Ingénieur en Certification', en: 'Certification Engineer' },
    'domains.certification_engineer.desc': { fr: 'Standards, normes et processus de certification', en: 'Standards, norms and certification processes' },
    'domains.digital_comm.title': { fr: 'Communication Digitale', en: 'Digital Communication' },
    'domains.digital_comm.desc': { fr: 'Stratégie de communication numérique', en: 'Digital communication strategy' },
    'domains.electronic_eng.title': { fr: 'Génie Électronique', en: 'Electronic Engineering' },
    'domains.electronic_eng.desc': { fr: 'Conception et développement de systèmes électroniques', en: 'Design and development of electronic systems' },
    'domains.iso_engineering.title': { fr: 'Ingénierie ISO', en: 'ISO Engineering' },
    'domains.iso_engineering.desc': { fr: 'Normes internationales et gestion de la qualité', en: 'International standards and quality management' },
    'domains.web_dev.title': { fr: 'Développement Web', en: 'Web Development' },
    'domains.web_dev.desc': { fr: 'Conception et développement d\'applications web', en: 'Design and development of web applications' },

    // DIRECTOR
    'director.stag': { fr: 'Leadership', en: 'Leadership' },
    'director.title_html': { fr: 'Mot du <em>Directeur</em>', en: 'Message from the <em>Director</em>' },
    'director.name': { fr: 'Aboubacar Sadih Gueye', en: 'Aboubacar Sadih Gueye' },
    'director.role_label': { fr: 'Directeur Général', en: 'Managing Director' },
    'director.message_html': {
        fr: `Lancé en 2021 sous l'impulsion de Soham El Wardini, le programme <strong>XAM-XAM</strong> est né d'une volonté claire : offrir aux jeunes un cadre structuré de formation orienté vers l'excellence, la discipline et l'insertion professionnelle durable.<br><br>
Dès sa création, XAM-XAM a adopté une approche pragmatique et opérationnelle, développant des compétences directement applicables dans divers secteurs : commerce, services, entrepreneuriat, gestion opérationnelle et métiers techniques. À ce jour, <strong>plus de 2 500 jeunes</strong> ont été formés et évoluent aujourd'hui dans des structures professionnelles ou des initiatives entrepreneuriales.<br><br>
Fort de cette expérience, <strong>XAM-XAM Élite</strong> constitue une version renforcée conçue pour accompagner des programmes structurants tels que WALDY. Notre ambition : renforcer les capacités stratégiques des cadres, développer l'utilisation de l'Intelligence Artificielle dans les processus de gestion et de décision, et favoriser l'innovation et la performance organisationnelle.<br><br>
Ce programme d'excellence appliquée forme une masse critique de professionnels hautement qualifiés, capables de répondre aux exigences techniques et comportementales de WALDY MAX TRADING. Dans le cadre d'un partenariat École-Entreprise, les candidats sélectionnés bénéficieront d'un programme de renforcement visant leur intégration professionnelle immédiate.<br><br>
XAM-XAM n'est pas qu'un dispositif de formation ; c'est un engagement durable en faveur de la jeunesse, de la compétence et de la transformation positive par le savoir appliqué.`,
        en: `Launched in 2021 under the impetus of Soham El Wardini, the <strong>XAM-XAM</strong> program was born from a clear vision: to provide young people with a structured training framework focused on excellence, discipline and lasting professional integration.<br><br>
From its creation, XAM-XAM adopted a pragmatic and operational approach, developing skills directly applicable in various sectors: commerce, services, entrepreneurship, operational management and technical trades. To date, <strong>over 2,500 young people</strong> have been trained and are now working in professional organizations or entrepreneurial ventures.<br><br>
Building on this experience, <strong>XAM-XAM Élite</strong> is an enhanced version designed to support structuring programs such as WALDY. Our ambition: to strengthen the strategic capacities of executives, develop the use of Artificial Intelligence in management and decision-making processes, and foster innovation and organizational performance.<br><br>
This program of applied excellence forms a critical mass of highly qualified professionals capable of meeting the technical and behavioral demands of WALDY MAX TRADING. As part of a School-Business partnership, selected candidates will benefit from a reinforcement program aimed at their immediate professional integration.<br><br>
XAM-XAM is not just a training program; it is a lasting commitment to youth, competence and positive transformation through applied knowledge.`
    },
    'director.role_full': { fr: 'Directeur Général · Xam Xam Elite', en: 'Managing Director · Xam Xam Elite' },
    'director.signature': { fr: '— Aboubacar Sadih Gueye', en: '— Aboubacar Sadih Gueye' },

    // CONDITIONS
    'conditions.stag': { fr: "Rejoindre l'Élite", en: 'Join the Elite' },
    'conditions.title_html': { fr: "Conditions <em>d'Adhésion</em>", en: '<em>Membership</em> Requirements' },
    'conditions.profile_title': { fr: 'Profil Recherché', en: 'Desired Profile' },
    'conditions.process_title': { fr: 'Processus de Sélection', en: 'Selection Process' },
    'conditions.req1': { fr: 'Diplôme universitaire (Bac+4 à Bac+7)', en: 'University degree (Bac+4 to Bac+7)' },
    'conditions.req2': { fr: 'Excellence académique démontrée', en: 'Demonstrated academic excellence' },
    'conditions.req3': { fr: 'Leadership et potentiels de croissance', en: 'Leadership and growth potential' },
    'conditions.req4': { fr: 'Disponibilité totale pendant 6 mois', en: 'Full availability for 6 months' },
    'conditions.req5': { fr: 'Maîtrise du français (oral et écrit)', en: 'French proficiency (spoken and written)' },
    'conditions.proc1': { fr: 'Processus de sélection compétitif', en: 'Competitive selection process' },
    'conditions.proc2': { fr: 'Entretien motivationnel obligatoire', en: 'Mandatory motivational interview' },
    'conditions.proc3': { fr: 'Étude de dossier académique', en: 'Academic file review' },
    'conditions.proc4': { fr: 'Lettre de recommandation requise', en: 'Required letter of recommendation' },
    'conditions.proc5': { fr: "Test d'aptitude professionnelle", en: 'Professional aptitude test' },
    'conditions.investment_label': { fr: 'Investissement', en: 'Investment' },
    'conditions.investment_value': { fr: '100% Rémunéré', en: '100% Paid' },
    'conditions.investment_desc': { fr: "Pendant votre stage de 3 mois, vous percevez une rémunération complète. Votre excellence mérite d'être récompensée.", en: 'During your 3-month internship, you receive full compensation. Your excellence deserves to be rewarded.' },

    // CTA
    'cta.title_html': { fr: "Prêt à Rejoindre <em>l'Élite</em> ?", en: "Ready to Join the <em>Elite</em>?" },
    'cta.subtitle': { fr: "Les inscriptions pour la promo 2025 sont ouvertes. Places limitées — sélectionnez votre domaine et postulez dès maintenant.", en: 'Applications for the 2025 cohort are now open. Limited spots — select your field and apply now.' },
    'cta.button': { fr: "Commencer Ma Candidature", en: 'Start My Application' },
    'cta.timeline': { fr: 'Processus de sélection : 4-7 jours ouvrables', en: 'Selection process: 4-7 business days' },

    // CONTACT
    'contact.address_label': { fr: 'Adresse', en: 'Address' },
    'contact.address_value': { fr: ' OUEST FOIRE VDN Dakar Sénégal', en: ' OUEST FOIRE VDN Dakar Senegal' },
    'contact.phone_label': { fr: 'Téléphone', en: 'Phone' },
    'contact.email_label': { fr: 'Email', en: 'Email' },
    'contact.bp_label': { fr: 'BP', en: 'P.O. Box' },

    // FOOTER
    'footer.copyright': { fr: '© 2026 Xam Xam Elite - Tous droits réservés.', en: '© 2026 Xam Xam Elite - All rights reserved.' },
    'footer.fix_line': { fr: ' FIX: 33 909 61 63', en: ' FIX: 33 909 61 63' },

    // WHATSAPP
    'whatsapp.aria': { fr: 'Contactez-nous sur WhatsApp', en: 'Contact us on WhatsApp' },

    // MODAL
    'modal.close_aria': { fr: 'Fermer', en: 'Close' },
    'modal.form_title': { fr: 'Formulaire d\'Inscription', en: 'Registration Form' },
    'modal.last_name': { fr: 'Nom', en: 'Last Name' },
    'modal.last_name_ph': { fr: 'Entrez votre nom', en: 'Enter your last name' },
    'modal.first_name': { fr: 'Prénom', en: 'First Name' },
    'modal.first_name_ph': { fr: 'Entrez votre prénom', en: 'Enter your first name' },
    'modal.email': { fr: 'Email', en: 'Email' },
    'modal.email_ph': { fr: 'votre@email.com', en: 'your@email.com' },
    'modal.phone': { fr: 'Téléphone', en: 'Phone' },
    'modal.phone_ph': { fr: '+221 7X XXX XX XX', en: '+221 7X XXX XX XX' },
    'modal.domain': { fr: 'Domaine', en: 'Field' },
    'modal.domain_select': { fr: '-- Choisir un domaine --', en: '-- Choose a field --' },
    'modal.submit': { fr: "Soumettre ma Candidature", en: 'Submit My Application' },
};

function applyTranslations(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);

    // Update html lang attribute
    document.documentElement.lang = lang;

    // Update page title
    document.title = lang === 'fr'
        ? 'Xam Xam Elite – Recrutement WALDY | Formation Accélérée 6 Mois'
        : 'Xam Xam Elite – WALDY Recruitment | 6-Month Accelerated Training';

    // Update nav links (data-fr / data-en)
    document.querySelectorAll('[data-fr]').forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });

    // Update lang toggle label
    const langLabel = document.getElementById('langLabel');
    if (langLabel) langLabel.textContent = lang === 'fr' ? 'EN' : 'FR';

    // Update data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[key] && translations[key][lang]) {
            el.textContent = translations[key][lang];
        }
    });

    // Update data-i18n-html elements
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (translations[key] && translations[key][lang]) {
            el.innerHTML = translations[key][lang];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[key] && translations[key][lang]) {
            el.placeholder = translations[key][lang];
        }
    });

    // Update aria-labels
    document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
        const key = el.getAttribute('data-i18n-aria-label');
        if (translations[key] && translations[key][lang]) {
            el.setAttribute('aria-label', translations[key][lang]);
        }
    });

    // Update title attributes
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (translations[key] && translations[key][lang]) {
            el.setAttribute('title', translations[key][lang]);
        }
    });

    // Update select options
    document.querySelectorAll('[data-i18n-option]').forEach(el => {
        const key = el.getAttribute('data-i18n-option');
        if (translations[key] && translations[key][lang]) {
            el.textContent = translations[key][lang];
        }
    });
}

function toggleLang() {
    const newLang = currentLang === 'fr' ? 'en' : 'fr';
    applyTranslations(newLang);
}

// ===== MAIN INIT =====
document.addEventListener('DOMContentLoaded', () => {
    // Apply translations
    applyTranslations(currentLang);

    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);

    // Position hand pointer to point at S'inscrire button
    const hand = document.getElementById('hand-pointer');
    const btnWrap = document.getElementById('btn-inscrire-wrap');
    const heroBtn = document.getElementById('btn-hero-inscrire');

    function positionHand() {
        if (!hand) return;
        const isMobile = window.innerWidth <= 900;
        const target = isMobile ? heroBtn : btnWrap;
        const halfWidth = 17;

        if (target) {
            const rect = target.getBoundingClientRect();
            hand.style.left = (rect.left + rect.width / 2 - halfWidth) + 'px';
            hand.style.top = (rect.bottom - 2) + 'px';
        }
    }

    positionHand();
    window.addEventListener('resize', positionHand);
    window.addEventListener('scroll', positionHand);
});
