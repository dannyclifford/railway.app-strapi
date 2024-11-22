import type { Struct, Schema } from '@strapi/strapi';

export interface SharedUser extends Struct.ComponentSchema {
  collectionName: 'components_shared_users';
  info: {
    displayName: 'User';
    icon: 'user';
    description: '';
  };
  attributes: {
    firstname: Schema.Attribute.String;
    lastname: Schema.Attribute.String;
    job: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
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
    ru: Schema.Attribute.String;
    fr: Schema.Attribute.String;
  };
}

export interface SharedSteps extends Struct.ComponentSchema {
  collectionName: 'components_shared_steps';
  info: {
    displayName: 'Steps';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
  };
}

export interface SharedSocialMediaIconLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_media_icon_links';
  info: {
    displayName: 'Social_Media_Icon_Links';
    icon: 'expand';
    description: '';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'shared.link', true>;
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

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    keywords: Schema.Attribute.Text;
    metaRobots: Schema.Attribute.String;
    structuredData: Schema.Attribute.JSON;
    metaViewport: Schema.Attribute.String;
    canonicalURL: Schema.Attribute.String;
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

export interface SharedPerks extends Struct.ComponentSchema {
  collectionName: 'components_shared_perks';
  info: {
    displayName: 'Perks';
    icon: 'check';
    description: '';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SharedNewsletterSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_newsletter_sections';
  info: {
    displayName: 'Newsletter Section';
    icon: 'discuss';
  };
  attributes: {
    title: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
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
    ru: Schema.Attribute.Text;
    fr: Schema.Attribute.Text;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    text: Schema.Attribute.String;
    URL: Schema.Attribute.String;
    target: Schema.Attribute.Enumeration<
      ['_blank', '_self', '_parent', '_top']
    >;
  };
}

export interface SharedLaunches extends Struct.ComponentSchema {
  collectionName: 'components_shared_launches';
  info: {
    displayName: 'Launches';
    icon: 'rocket';
    description: '';
  };
  attributes: {
    mission_number: Schema.Attribute.String;
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
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

export interface SharedForm extends Struct.ComponentSchema {
  collectionName: 'components_shared_forms';
  info: {
    displayName: 'Form';
    icon: 'paperPlane';
    description: '';
  };
  attributes: {
    inputs: Schema.Attribute.Component<'items.input', true>;
  };
}

export interface SharedContactSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_sections';
  info: {
    displayName: 'Contact Section';
    icon: 'phone';
  };
  attributes: {
    title: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    showNameField: Schema.Attribute.Boolean;
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

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    text: Schema.Attribute.String;
    URL: Schema.Attribute.String;
    target: Schema.Attribute.Enumeration<
      ['_blank', '_self', '_parent', '_top']
    >;
    variant: Schema.Attribute.Enumeration<
      ['simple', 'outline', 'primary', 'muted']
    > &
      Schema.Attribute.DefaultTo<'primary'>;
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

export interface RightsSectionMythVsFact extends Struct.ComponentSchema {
  collectionName: 'components_rights_section_myth_vs_facts';
  info: {
    displayName: 'Myth vs Fact Section';
    icon: 'check';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Know The Facts'>;
    subtitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Myths we hear about Asylum'>;
    mythsAndFacts: Schema.Attribute.Component<'items.myth-vs-fact', true>;
  };
}

export interface RightsSectionDefinitions extends Struct.ComponentSchema {
  collectionName: 'components_rights_section_definitions';
  info: {
    displayName: 'Definitions Section';
    icon: 'book';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Definitions'>;
    subtitle: Schema.Attribute.String;
    definitions: Schema.Attribute.Component<'items.definition', true> &
      Schema.Attribute.Required;
  };
}

export interface RightsNycRightsSection extends Struct.ComponentSchema {
  collectionName: 'components_rights_nyc_rights_sections';
  info: {
    displayName: 'NYC Rights Section';
    icon: 'thumbUp';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    rights: Schema.Attribute.Component<'items.icon-card', true> &
      Schema.Attribute.Required;
  };
}

export interface ItemsResourceLink extends Struct.ComponentSchema {
  collectionName: 'components_items_resource_links';
  info: {
    displayName: 'Resource Link';
    icon: 'link';
  };
  attributes: {
    Title: Schema.Attribute.String;
    path: Schema.Attribute.String;
    icon: Schema.Attribute.String;
  };
}

export interface ItemsRayItems extends Struct.ComponentSchema {
  collectionName: 'components_items_ray_items';
  info: {
    displayName: 'Ray_Card_Items';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    item_1: Schema.Attribute.String;
    item_2: Schema.Attribute.String;
    item_3: Schema.Attribute.String;
  };
}

export interface ItemsPartner extends Struct.ComponentSchema {
  collectionName: 'components_items_partners';
  info: {
    displayName: 'Partner';
    icon: 'oneToMany';
  };
  attributes: {
    Name: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images'>;
    url: Schema.Attribute.String;
  };
}

export interface ItemsMythVsFact extends Struct.ComponentSchema {
  collectionName: 'components_items_myth_vs_facts';
  info: {
    displayName: 'Myth vs Fact';
    icon: 'bulletList';
  };
  attributes: {
    myth: Schema.Attribute.Text & Schema.Attribute.Required;
    fact: Schema.Attribute.Blocks & Schema.Attribute.Required;
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

export interface ItemsInput extends Struct.ComponentSchema {
  collectionName: 'components_items_inputs';
  info: {
    displayName: 'Input';
    icon: 'apps';
    description: '';
  };
  attributes: {
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
    name: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
  };
}

export interface ItemsIconCard extends Struct.ComponentSchema {
  collectionName: 'components_items_icon_cards';
  info: {
    displayName: 'Icon Card';
    icon: 'grid';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
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
    url: Schema.Attribute.String;
  };
}

export interface ItemsGraphCardTopItems extends Struct.ComponentSchema {
  collectionName: 'components_items_graph_card_top_items';
  info: {
    displayName: 'Graph_Card_Top_Items';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface ItemsDefinition extends Struct.ComponentSchema {
  collectionName: 'components_items_definitions';
  info: {
    displayName: 'Definition';
    icon: 'book';
  };
  attributes: {
    question: Schema.Attribute.String & Schema.Attribute.Required;
    definition: Schema.Attribute.Blocks;
  };
}

export interface ItemsCtaCard extends Struct.ComponentSchema {
  collectionName: 'components_items_cta_cards';
  info: {
    displayName: 'CTA Card';
    icon: 'walk';
  };
  attributes: {
    title: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    url: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Enumeration<
      ['Users - Service Providers', 'Book - Rights']
    >;
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

export interface HomeSurveySection extends Struct.ComponentSchema {
  collectionName: 'components_home_survey_sections';
  info: {
    displayName: 'Survey Section';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    url: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/survey'>;
  };
}

export interface HomeResourcesSection extends Struct.ComponentSchema {
  collectionName: 'components_home_resources_sections';
  info: {
    displayName: 'Resources Section';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    Title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Resources'>;
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'What are you looking for today?'>;
    Resource_Pages: Schema.Attribute.Relation<
      'oneToMany',
      'api::resource-page.resource-page'
    >;
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

export interface HomeMissionSection extends Struct.ComponentSchema {
  collectionName: 'components_home_mission_sections';
  info: {
    displayName: 'Mission Section';
    icon: 'moon';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    mission: Schema.Attribute.Text;
    visionTitle: Schema.Attribute.String;
    visionText: Schema.Attribute.Text;
    valuesTitle: Schema.Attribute.String;
    values: Schema.Attribute.Component<'items.graph-card-top-items', true>;
  };
}

export interface HomeLearnFromEachOtherSection extends Struct.ComponentSchema {
  collectionName: 'components_home_learn_from_each_other_sections';
  info: {
    displayName: 'Learn From Each Other Section';
  };
  attributes: {
    title: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    Cards: Schema.Attribute.Component<'items.cta-card', true>;
  };
}

export interface HomeCallToActionSection extends Struct.ComponentSchema {
  collectionName: 'components_home_call_to_action_sections';
  info: {
    displayName: 'Call To Action Section';
    icon: 'cursor';
  };
  attributes: {
    Title: Schema.Attribute.String;
    Description: Schema.Attribute.Text;
    ButtonText: Schema.Attribute.String;
  };
}

export interface HomeAboutUsSection extends Struct.ComponentSchema {
  collectionName: 'components_home_about_us_sections';
  info: {
    displayName: 'About Us Section';
    icon: 'information';
  };
  attributes: {
    Title: Schema.Attribute.String;
    Description: Schema.Attribute.Blocks;
    Images: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
  };
}

export interface GlobalNavbar extends Struct.ComponentSchema {
  collectionName: 'components_global_navbars';
  info: {
    displayName: 'Navbar';
    icon: 'bold';
    description: '';
  };
  attributes: {
    navbar_items: Schema.Attribute.Component<'shared.link', true>;
    right_navbar_items: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface GlobalFooter extends Struct.ComponentSchema {
  collectionName: 'components_global_footers';
  info: {
    displayName: 'Footer';
    icon: 'apps';
    description: '';
  };
  attributes: {
    description: Schema.Attribute.String;
    copyright: Schema.Attribute.String;
    designed_developed_by: Schema.Attribute.String;
    built_with: Schema.Attribute.String;
    internal_links: Schema.Attribute.Component<'shared.link', true>;
    policy_links: Schema.Attribute.Component<'shared.link', true>;
    social_media_links: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface DynamicZoneLaunches extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_launches';
  info: {
    displayName: 'Launches';
    icon: 'rocket';
    description: '';
  };
  attributes: {
    heading: Schema.Attribute.String;
    sub_heading: Schema.Attribute.String;
    launches: Schema.Attribute.Component<'shared.launches', true>;
  };
}

export interface DynamicZoneHowItWorks extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_how_it_works';
  info: {
    displayName: 'How_It_Works';
    icon: 'question';
    description: '';
  };
  attributes: {
    heading: Schema.Attribute.String;
    sub_heading: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'shared.steps', true>;
  };
}

export interface DynamicZoneHero extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_heroes';
  info: {
    displayName: 'Hero';
    icon: 'layout';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    sub_heading: Schema.Attribute.Text;
    background_image: Schema.Attribute.Media<'images'>;
    featured_image: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
  };
}

export interface DynamicZoneFormNextToSection extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_form_next_to_sections';
  info: {
    displayName: 'Form_Next_To_Section';
    icon: 'book';
    description: '';
  };
  attributes: {
    heading: Schema.Attribute.String;
    sub_heading: Schema.Attribute.String;
    form: Schema.Attribute.Component<'shared.form', false>;
    section: Schema.Attribute.Component<'shared.section', false>;
    social_media_icon_links: Schema.Attribute.Component<
      'shared.social-media-icon-links',
      true
    >;
  };
}

export interface DynamicZoneFeatures extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_features';
  info: {
    displayName: 'Features';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    heading: Schema.Attribute.String;
    sub_heading: Schema.Attribute.String;
    globe_card: Schema.Attribute.Component<'cards.globe-card', false>;
    ray_card: Schema.Attribute.Component<'cards.ray-card', false>;
    graph_card: Schema.Attribute.Component<'cards.graph-card', false>;
    social_media_card: Schema.Attribute.Component<
      'cards.social-media-card',
      false
    >;
  };
}

export interface DynamicZoneFaq extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'question';
  };
  attributes: {
    heading: Schema.Attribute.String;
    sub_heading: Schema.Attribute.String;
    faqs: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'>;
  };
}

export interface DynamicZoneCta extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_ctas';
  info: {
    displayName: 'CTA';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    heading: Schema.Attribute.String;
    sub_heading: Schema.Attribute.String;
    CTAs: Schema.Attribute.Component<'shared.button', false>;
  };
}

export interface DynamicZoneBrands extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_brands';
  info: {
    displayName: 'Brands';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    heading: Schema.Attribute.String;
    sub_heading: Schema.Attribute.String;
  };
}

export interface CardsSocialMediaCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_social_media_cards';
  info: {
    displayName: 'Social_Media_Card';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    Title: Schema.Attribute.String;
    Description: Schema.Attribute.String;
    span: Schema.Attribute.Enumeration<['one', 'two', 'three']>;
  };
}

export interface CardsRayCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_ray_cards';
  info: {
    displayName: 'Ray_Card';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    before_ray_items: Schema.Attribute.Component<'items.ray-items', false>;
    after_ray_items: Schema.Attribute.Component<'items.ray-items', false>;
    span: Schema.Attribute.Enumeration<['one', 'two', 'three']>;
  };
}

export interface CardsGraphCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_graph_cards';
  info: {
    displayName: 'Graph_Card';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    top_items: Schema.Attribute.Component<'items.graph-card-top-items', true>;
    highlighted_text: Schema.Attribute.String;
    span: Schema.Attribute.Enumeration<['one', 'two', 'three']>;
  };
}

export interface CardsGlobeCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_globe_cards';
  info: {
    displayName: 'Globe_Card';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    span: Schema.Attribute.Enumeration<['one', 'two', 'three']>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.user': SharedUser;
      'shared.title': SharedTitle;
      'shared.steps': SharedSteps;
      'shared.social-media-icon-links': SharedSocialMediaIconLinks;
      'shared.services': SharedServices;
      'shared.seo': SharedSeo;
      'shared.section': SharedSection;
      'shared.perks': SharedPerks;
      'shared.newsletter-section': SharedNewsletterSection;
      'shared.multilingual': SharedMultilingual;
      'shared.link': SharedLink;
      'shared.launches': SharedLaunches;
      'shared.languages': SharedLanguages;
      'shared.form': SharedForm;
      'shared.contact-section': SharedContactSection;
      'shared.categories': SharedCategories;
      'shared.button': SharedButton;
      'shared.area': SharedArea;
      'shared.address': SharedAddress;
      'rights.section-myth-vs-fact': RightsSectionMythVsFact;
      'rights.section-definitions': RightsSectionDefinitions;
      'rights.nyc-rights-section': RightsNycRightsSection;
      'items.resource-link': ItemsResourceLink;
      'items.ray-items': ItemsRayItems;
      'items.partner': ItemsPartner;
      'items.myth-vs-fact': ItemsMythVsFact;
      'items.left-navbar-items': ItemsLeftNavbarItems;
      'items.input': ItemsInput;
      'items.icon-card': ItemsIconCard;
      'items.graph-card-top-items': ItemsGraphCardTopItems;
      'items.definition': ItemsDefinition;
      'items.cta-card': ItemsCtaCard;
      'home.video-section': HomeVideoSection;
      'home.survey-section': HomeSurveySection;
      'home.resources-section': HomeResourcesSection;
      'home.partners-section': HomePartnersSection;
      'home.mission-section': HomeMissionSection;
      'home.learn-from-each-other-section': HomeLearnFromEachOtherSection;
      'home.call-to-action-section': HomeCallToActionSection;
      'home.about-us-section': HomeAboutUsSection;
      'global.navbar': GlobalNavbar;
      'global.footer': GlobalFooter;
      'dynamic-zone.launches': DynamicZoneLaunches;
      'dynamic-zone.how-it-works': DynamicZoneHowItWorks;
      'dynamic-zone.hero': DynamicZoneHero;
      'dynamic-zone.form-next-to-section': DynamicZoneFormNextToSection;
      'dynamic-zone.features': DynamicZoneFeatures;
      'dynamic-zone.faq': DynamicZoneFaq;
      'dynamic-zone.cta': DynamicZoneCta;
      'dynamic-zone.brands': DynamicZoneBrands;
      'cards.social-media-card': CardsSocialMediaCard;
      'cards.ray-card': CardsRayCard;
      'cards.graph-card': CardsGraphCard;
      'cards.globe-card': CardsGlobeCard;
    }
  }
}
