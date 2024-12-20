import type { Schema, Struct } from '@strapi/strapi';

export interface CardsGlobeCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_globe_cards';
  info: {
    description: '';
    displayName: 'Globe_Card';
    icon: 'dashboard';
  };
  attributes: {
    description: Schema.Attribute.String;
    span: Schema.Attribute.Enumeration<['one', 'two', 'three']>;
    title: Schema.Attribute.String;
  };
}

export interface CardsGraphCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_graph_cards';
  info: {
    description: '';
    displayName: 'Graph_Card';
    icon: 'dashboard';
  };
  attributes: {
    description: Schema.Attribute.String;
    highlighted_text: Schema.Attribute.String;
    span: Schema.Attribute.Enumeration<['one', 'two', 'three']>;
    title: Schema.Attribute.String;
    top_items: Schema.Attribute.Component<'items.graph-card-top-items', true>;
  };
}

export interface CardsRayCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_ray_cards';
  info: {
    description: '';
    displayName: 'Ray_Card';
    icon: 'dashboard';
  };
  attributes: {
    after_ray_items: Schema.Attribute.Component<'items.ray-items', false>;
    before_ray_items: Schema.Attribute.Component<'items.ray-items', false>;
    description: Schema.Attribute.String;
    span: Schema.Attribute.Enumeration<['one', 'two', 'three']>;
    title: Schema.Attribute.String;
  };
}

export interface CardsSocialMediaCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_social_media_cards';
  info: {
    description: '';
    displayName: 'Social_Media_Card';
    icon: 'dashboard';
  };
  attributes: {
    Description: Schema.Attribute.String;
    span: Schema.Attribute.Enumeration<['one', 'two', 'three']>;
    Title: Schema.Attribute.String;
  };
}

export interface DynamicZoneBrands extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_brands';
  info: {
    description: '';
    displayName: 'Brands';
    icon: 'bulletList';
  };
  attributes: {
    heading: Schema.Attribute.String;
    sub_heading: Schema.Attribute.String;
  };
}

export interface DynamicZoneCta extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_ctas';
  info: {
    description: '';
    displayName: 'CTA';
    icon: 'cursor';
  };
  attributes: {
    CTAs: Schema.Attribute.Component<'shared.button', false>;
    heading: Schema.Attribute.String;
    sub_heading: Schema.Attribute.String;
  };
}

export interface DynamicZoneFaq extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'question';
  };
  attributes: {
    faqs: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'>;
    heading: Schema.Attribute.String;
    sub_heading: Schema.Attribute.String;
  };
}

export interface DynamicZoneFeatures extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_features';
  info: {
    description: '';
    displayName: 'Features';
    icon: 'bulletList';
  };
  attributes: {
    globe_card: Schema.Attribute.Component<'cards.globe-card', false>;
    graph_card: Schema.Attribute.Component<'cards.graph-card', false>;
    heading: Schema.Attribute.String;
    ray_card: Schema.Attribute.Component<'cards.ray-card', false>;
    social_media_card: Schema.Attribute.Component<
      'cards.social-media-card',
      false
    >;
    sub_heading: Schema.Attribute.String;
  };
}

export interface DynamicZoneFormNextToSection extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_form_next_to_sections';
  info: {
    description: '';
    displayName: 'Form_Next_To_Section';
    icon: 'book';
  };
  attributes: {
    form: Schema.Attribute.Component<'shared.form', false>;
    heading: Schema.Attribute.String;
    section: Schema.Attribute.Component<'shared.section', false>;
    social_media_icon_links: Schema.Attribute.Component<
      'shared.social-media-icon-links',
      true
    >;
    sub_heading: Schema.Attribute.String;
  };
}

export interface DynamicZoneHero extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_heroes';
  info: {
    description: '';
    displayName: 'Hero';
    icon: 'layout';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images'>;
    featured_image: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    sub_heading: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DynamicZoneHowItWorks extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_how_it_works';
  info: {
    description: '';
    displayName: 'How_It_Works';
    icon: 'question';
  };
  attributes: {
    heading: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'shared.steps', true>;
    sub_heading: Schema.Attribute.String;
  };
}

export interface DynamicZoneLaunches extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_launches';
  info: {
    description: '';
    displayName: 'Launches';
    icon: 'rocket';
  };
  attributes: {
    heading: Schema.Attribute.String;
    launches: Schema.Attribute.Component<'shared.launches', true>;
    sub_heading: Schema.Attribute.String;
  };
}

export interface GlobalFooter extends Struct.ComponentSchema {
  collectionName: 'components_global_footers';
  info: {
    description: '';
    displayName: 'Footer';
    icon: 'apps';
  };
  attributes: {
    built_with: Schema.Attribute.String;
    copyright: Schema.Attribute.String;
    description: Schema.Attribute.String;
    designed_developed_by: Schema.Attribute.String;
    internal_links: Schema.Attribute.Component<'shared.link', true>;
    policy_links: Schema.Attribute.Component<'shared.link', true>;
    social_media_links: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface GlobalNavbar extends Struct.ComponentSchema {
  collectionName: 'components_global_navbars';
  info: {
    description: '';
    displayName: 'Navbar';
    icon: 'bold';
  };
  attributes: {
    nav_items: Schema.Attribute.Component<'items.nav-item', true>;
  };
}

export interface HomeAboutUsSection extends Struct.ComponentSchema {
  collectionName: 'components_home_about_us_sections';
  info: {
    displayName: 'About Us Section';
    icon: 'information';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    Images: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    Title: Schema.Attribute.String;
  };
}

export interface HomeCallToActionSection extends Struct.ComponentSchema {
  collectionName: 'components_home_call_to_action_sections';
  info: {
    displayName: 'Call To Action Section';
    icon: 'cursor';
  };
  attributes: {
    ButtonText: Schema.Attribute.String;
    Description: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface HomeLearnFromEachOtherSection extends Struct.ComponentSchema {
  collectionName: 'components_home_learn_from_each_other_sections';
  info: {
    displayName: 'Learn From Each Other Section';
  };
  attributes: {
    Cards: Schema.Attribute.Component<'items.cta-card', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeMissionSection extends Struct.ComponentSchema {
  collectionName: 'components_home_mission_sections';
  info: {
    description: '';
    displayName: 'Mission Section';
    icon: 'moon';
  };
  attributes: {
    mission: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    values: Schema.Attribute.Component<'items.graph-card-top-items', true>;
    valuesTitle: Schema.Attribute.String;
    visionText: Schema.Attribute.Text;
    visionTitle: Schema.Attribute.String;
  };
}

export interface HomePartnersSection extends Struct.ComponentSchema {
  collectionName: 'components_home_partners_sections';
  info: {
    displayName: 'Partners Section';
    icon: 'briefcase';
  };
  attributes: {
    Partners: Schema.Attribute.Component<'items.partner', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomeResourcesSection extends Struct.ComponentSchema {
  collectionName: 'components_home_resources_sections';
  info: {
    description: '';
    displayName: 'Resources Section';
    icon: 'bulletList';
  };
  attributes: {
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'What are you looking for today?'>;
    Resource_Pages: Schema.Attribute.Relation<
      'oneToMany',
      'api::resource-page.resource-page'
    >;
    Title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Resources'>;
  };
}

export interface HomeSurveySection extends Struct.ComponentSchema {
  collectionName: 'components_home_survey_sections';
  info: {
    description: '';
    displayName: 'Survey Section';
    icon: 'chartBubble';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/survey'>;
  };
}

export interface HomeVideoSection extends Struct.ComponentSchema {
  collectionName: 'components_home_video_sections';
  info: {
    displayName: 'Video Section';
    icon: 'play';
  };
  attributes: {
    title: Schema.Attribute.String;
    youtubeLink: Schema.Attribute.String;
  };
}

export interface ItemsCtaCard extends Struct.ComponentSchema {
  collectionName: 'components_items_cta_cards';
  info: {
    displayName: 'CTA Card';
    icon: 'walk';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Enumeration<
      ['Users - Service Providers', 'Book - Rights']
    >;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ItemsDefinition extends Struct.ComponentSchema {
  collectionName: 'components_items_definitions';
  info: {
    displayName: 'Definition';
    icon: 'book';
  };
  attributes: {
    definition: Schema.Attribute.Blocks;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ItemsGraphCardTopItems extends Struct.ComponentSchema {
  collectionName: 'components_items_graph_card_top_items';
  info: {
    description: '';
    displayName: 'Graph_Card_Top_Items';
    icon: 'bulletList';
  };
  attributes: {
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ItemsIconCard extends Struct.ComponentSchema {
  collectionName: 'components_items_icon_cards';
  info: {
    description: '';
    displayName: 'Icon Card';
    icon: 'grid';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Enumeration<
      [
        'Globe',
        'Protect',
        'Stethoscope',
        'Heart Handshake',
        'Building',
        'Home',
        'Shield',
        'Alert',
      ]
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface ItemsInput extends Struct.ComponentSchema {
  collectionName: 'components_items_inputs';
  info: {
    description: '';
    displayName: 'Input';
    icon: 'apps';
  };
  attributes: {
    name: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      [
        'text',
        'email',
        'password',
        'submit',
        'textarea',
        'button',
        'checkbox',
        'color',
        'date',
        'datetime-local',
        'file',
        'hidden',
        'image',
        'month',
        'number',
        'radio',
        'range',
        'reset',
        'search',
        'tel',
        'time',
        'url',
        'week',
      ]
    > &
      Schema.Attribute.DefaultTo<'text'>;
  };
}

export interface ItemsLeftNavbarItems extends Struct.ComponentSchema {
  collectionName: 'components_items_left_navbar_items';
  info: {
    displayName: 'Left_Navbar_Items';
    icon: 'bulletList';
  };
  attributes: {
    name: Schema.Attribute.String;
    URL: Schema.Attribute.String;
  };
}

export interface ItemsMythVsFact extends Struct.ComponentSchema {
  collectionName: 'components_items_myth_vs_facts';
  info: {
    displayName: 'Myth vs Fact';
    icon: 'bulletList';
  };
  attributes: {
    fact: Schema.Attribute.Blocks & Schema.Attribute.Required;
    myth: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ItemsNavItem extends Struct.ComponentSchema {
  collectionName: 'components_items_nav_items';
  info: {
    description: '';
    displayName: 'Nav Item';
    icon: 'bulletList';
  };
  attributes: {
    menu_items: Schema.Attribute.Component<'items.submenu', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface ItemsPartner extends Struct.ComponentSchema {
  collectionName: 'components_items_partners';
  info: {
    displayName: 'Partner';
    icon: 'oneToMany';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images'>;
    Name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ItemsRayItems extends Struct.ComponentSchema {
  collectionName: 'components_items_ray_items';
  info: {
    description: '';
    displayName: 'Ray_Card_Items';
    icon: 'bulletList';
  };
  attributes: {
    item_1: Schema.Attribute.String;
    item_2: Schema.Attribute.String;
    item_3: Schema.Attribute.String;
  };
}

export interface ItemsResourceLink extends Struct.ComponentSchema {
  collectionName: 'components_items_resource_links';
  info: {
    displayName: 'Resource Link';
    icon: 'link';
  };
  attributes: {
    icon: Schema.Attribute.String;
    path: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface ItemsSubmenu extends Struct.ComponentSchema {
  collectionName: 'components_items_submenus';
  info: {
    displayName: 'submenu';
    icon: 'arrowDown';
  };
  attributes: {
    description: Schema.Attribute.Text;
    open_new_tab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface RightsNycRightsSection extends Struct.ComponentSchema {
  collectionName: 'components_rights_nyc_rights_sections';
  info: {
    description: '';
    displayName: 'NYC Rights Section';
    icon: 'thumbUp';
  };
  attributes: {
    rights: Schema.Attribute.Component<'items.icon-card', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface RightsSectionDefinitions extends Struct.ComponentSchema {
  collectionName: 'components_rights_section_definitions';
  info: {
    description: '';
    displayName: 'Definitions Section';
    icon: 'book';
  };
  attributes: {
    definitions: Schema.Attribute.Component<'items.definition', true> &
      Schema.Attribute.Required;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Definitions'>;
  };
}

export interface RightsSectionMythVsFact extends Struct.ComponentSchema {
  collectionName: 'components_rights_section_myth_vs_facts';
  info: {
    description: '';
    displayName: 'Myth vs Fact Section';
    icon: 'check';
  };
  attributes: {
    mythsAndFacts: Schema.Attribute.Component<'items.myth-vs-fact', true>;
    subtitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Myths we hear about Asylum'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Know The Facts'>;
  };
}

export interface SharedAddress extends Struct.ComponentSchema {
  collectionName: 'components_shared_addresses';
  info: {
    displayName: 'Address';
    icon: 'pinMap';
  };
  attributes: {
    addressLine1: Schema.Attribute.String & Schema.Attribute.Required;
    addressLine2: Schema.Attribute.String;
    city: Schema.Attribute.String;
    state: Schema.Attribute.String;
    zipcode: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 99999;
        },
        number
      >;
  };
}

export interface SharedArea extends Struct.ComponentSchema {
  collectionName: 'components_shared_areas';
  info: {
    displayName: 'Area';
    icon: 'apps';
  };
  attributes: {
    county: Schema.Attribute.Enumeration<
      [
        'Bronx',
        'Queens',
        'Manhattan',
        'Brooklyn',
        'Staten Island',
        'Westchester',
        'Orange',
        'Rockland',
      ]
    >;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    description: '';
    displayName: 'Button';
    icon: 'cursor';
  };
  attributes: {
    target: Schema.Attribute.Enumeration<
      ['_blank', '_self', '_parent', '_top']
    >;
    text: Schema.Attribute.String;
    URL: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<
      ['simple', 'outline', 'primary', 'muted']
    > &
      Schema.Attribute.DefaultTo<'primary'>;
  };
}

export interface SharedCategories extends Struct.ComponentSchema {
  collectionName: 'components_shared_categories';
  info: {
    displayName: 'Categories';
    icon: 'bulletList';
  };
  attributes: {
    category: Schema.Attribute.Enumeration<
      [
        'health',
        'mental-health',
        'employment',
        'reproductive-health',
        'housing',
        'chronic-illness',
        'child-care',
        'emergency-hotlines',
        'transportation',
        'substance-abuse-treatment',
        'domestic-violence',
        'legal',
      ]
    >;
  };
}

export interface SharedContactSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_sections';
  info: {
    displayName: 'Contact Section';
    icon: 'phone';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    showNameField: Schema.Attribute.Boolean;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedForm extends Struct.ComponentSchema {
  collectionName: 'components_shared_forms';
  info: {
    description: '';
    displayName: 'Form';
    icon: 'paperPlane';
  };
  attributes: {
    inputs: Schema.Attribute.Component<'items.input', true>;
  };
}

export interface SharedLanguages extends Struct.ComponentSchema {
  collectionName: 'components_shared_languages';
  info: {
    displayName: 'languages';
    icon: 'globe';
  };
  attributes: {
    language: Schema.Attribute.Enumeration<
      ['English', 'Spanish', 'Russian', 'French']
    >;
  };
}

export interface SharedLaunches extends Struct.ComponentSchema {
  collectionName: 'components_shared_launches';
  info: {
    description: '';
    displayName: 'Launches';
    icon: 'rocket';
  };
  attributes: {
    description: Schema.Attribute.String;
    mission_number: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    target: Schema.Attribute.Enumeration<
      ['_blank', '_self', '_parent', '_top']
    >;
    text: Schema.Attribute.String;
    URL: Schema.Attribute.String;
  };
}

export interface SharedMultilingual extends Struct.ComponentSchema {
  collectionName: 'components_shared_multilinguals';
  info: {
    displayName: 'Multilingual';
    icon: 'globe';
  };
  attributes: {
    en: Schema.Attribute.Text & Schema.Attribute.Required;
    es: Schema.Attribute.Text;
    fr: Schema.Attribute.Text;
    ru: Schema.Attribute.Text;
  };
}

export interface SharedNewsletterSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_newsletter_sections';
  info: {
    displayName: 'Newsletter Section';
    icon: 'discuss';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedPerks extends Struct.ComponentSchema {
  collectionName: 'components_shared_perks';
  info: {
    description: '';
    displayName: 'Perks';
    icon: 'check';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SharedSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_sections';
  info: {
    displayName: 'Section';
    icon: 'cursor';
  };
  attributes: {
    heading: Schema.Attribute.String;
    sub_heading: Schema.Attribute.String;
    users: Schema.Attribute.Component<'shared.user', true>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface SharedServices extends Struct.ComponentSchema {
  collectionName: 'components_shared_services';
  info: {
    displayName: 'Services';
    icon: 'user';
  };
  attributes: {
    service: Schema.Attribute.Enumeration<
      [
        'Mental Health',
        'General Health',
        'Housing',
        'Child Care',
        'Trauma Treatment',
        'Employment',
        'Forensic Examiniations',
        'Reproductive Health',
        'Chronic Illness',
        'Dental Care',
        'Pediatric Care',
        'Emergency Medical',
        'LGBTQ Friendly',
        'Mental Health Emergency Hotlines',
        'Optometry',
        'Transportation',
        'Legal Support',
        'Domestic Violence',
        'Food',
      ]
    >;
  };
}

export interface SharedSocialMediaIconLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_media_icon_links';
  info: {
    description: '';
    displayName: 'Social_Media_Icon_Links';
    icon: 'expand';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface SharedSteps extends Struct.ComponentSchema {
  collectionName: 'components_shared_steps';
  info: {
    description: '';
    displayName: 'Steps';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedTitle extends Struct.ComponentSchema {
  collectionName: 'components_shared_titles';
  info: {
    displayName: 'Title';
    icon: 'hashtag';
  };
  attributes: {
    en: Schema.Attribute.String & Schema.Attribute.Required;
    es: Schema.Attribute.String;
    fr: Schema.Attribute.String;
    ru: Schema.Attribute.String;
  };
}

export interface SharedUser extends Struct.ComponentSchema {
  collectionName: 'components_shared_users';
  info: {
    description: '';
    displayName: 'User';
    icon: 'user';
  };
  attributes: {
    firstname: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    job: Schema.Attribute.String;
    lastname: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cards.globe-card': CardsGlobeCard;
      'cards.graph-card': CardsGraphCard;
      'cards.ray-card': CardsRayCard;
      'cards.social-media-card': CardsSocialMediaCard;
      'dynamic-zone.brands': DynamicZoneBrands;
      'dynamic-zone.cta': DynamicZoneCta;
      'dynamic-zone.faq': DynamicZoneFaq;
      'dynamic-zone.features': DynamicZoneFeatures;
      'dynamic-zone.form-next-to-section': DynamicZoneFormNextToSection;
      'dynamic-zone.hero': DynamicZoneHero;
      'dynamic-zone.how-it-works': DynamicZoneHowItWorks;
      'dynamic-zone.launches': DynamicZoneLaunches;
      'global.footer': GlobalFooter;
      'global.navbar': GlobalNavbar;
      'home.about-us-section': HomeAboutUsSection;
      'home.call-to-action-section': HomeCallToActionSection;
      'home.learn-from-each-other-section': HomeLearnFromEachOtherSection;
      'home.mission-section': HomeMissionSection;
      'home.partners-section': HomePartnersSection;
      'home.resources-section': HomeResourcesSection;
      'home.survey-section': HomeSurveySection;
      'home.video-section': HomeVideoSection;
      'items.cta-card': ItemsCtaCard;
      'items.definition': ItemsDefinition;
      'items.graph-card-top-items': ItemsGraphCardTopItems;
      'items.icon-card': ItemsIconCard;
      'items.input': ItemsInput;
      'items.left-navbar-items': ItemsLeftNavbarItems;
      'items.myth-vs-fact': ItemsMythVsFact;
      'items.nav-item': ItemsNavItem;
      'items.partner': ItemsPartner;
      'items.ray-items': ItemsRayItems;
      'items.resource-link': ItemsResourceLink;
      'items.submenu': ItemsSubmenu;
      'rights.nyc-rights-section': RightsNycRightsSection;
      'rights.section-definitions': RightsSectionDefinitions;
      'rights.section-myth-vs-fact': RightsSectionMythVsFact;
      'shared.address': SharedAddress;
      'shared.area': SharedArea;
      'shared.button': SharedButton;
      'shared.categories': SharedCategories;
      'shared.contact-section': SharedContactSection;
      'shared.form': SharedForm;
      'shared.languages': SharedLanguages;
      'shared.launches': SharedLaunches;
      'shared.link': SharedLink;
      'shared.multilingual': SharedMultilingual;
      'shared.newsletter-section': SharedNewsletterSection;
      'shared.perks': SharedPerks;
      'shared.section': SharedSection;
      'shared.seo': SharedSeo;
      'shared.services': SharedServices;
      'shared.social-media-icon-links': SharedSocialMediaIconLinks;
      'shared.steps': SharedSteps;
      'shared.title': SharedTitle;
      'shared.user': SharedUser;
    }
  }
}
