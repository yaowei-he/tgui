// country_data.ts

export interface Country {
    label: string;
    dialCode: string;
    iso2: string;
  }

  export const getFlagUrl = (iso2: string) =>
    `https://flagcdn.com/w40/${iso2.toLowerCase()}.png`;
  
  
  export const countries: Country[] = [
    { label: 'Afghanistan', dialCode: '+93', iso2: 'AF' },
    { label: 'Albania', dialCode: '+355', iso2: 'AL' },
    { label: 'Algeria', dialCode: '+213', iso2: 'DZ' },
    { label: 'Andorra', dialCode: '+376', iso2: 'AD' },
    { label: 'Angola', dialCode: '+244', iso2: 'AO' },
    { label: 'Antigua and Barbuda', dialCode: '+1-268', iso2: 'AG' },
    { label: 'Argentina', dialCode: '+54', iso2: 'AR' },
    { label: 'Armenia', dialCode: '+374', iso2: 'AM' },
    { label: 'Australia', dialCode: '+61', iso2: 'AU' },
    { label: 'Austria', dialCode: '+43', iso2: 'AT' },
    { label: 'Azerbaijan', dialCode: '+994', iso2: 'AZ' },
  
    { label: 'Bahamas', dialCode: '+1-242', iso2: 'BS' },
    { label: 'Bahrain', dialCode: '+973', iso2: 'BH' },
    { label: 'Bangladesh', dialCode: '+880', iso2: 'BD' },
    { label: 'Barbados', dialCode: '+1-246', iso2: 'BB' },
    { label: 'Belarus', dialCode: '+375', iso2: 'BY' },
    { label: 'Belgium', dialCode: '+32', iso2: 'BE' },
    { label: 'Belize', dialCode: '+501', iso2: 'BZ' },
    { label: 'Benin', dialCode: '+229', iso2: 'BJ' },
    { label: 'Bhutan', dialCode: '+975', iso2: 'BT' },
    { label: 'Bolivia', dialCode: '+591', iso2: 'BO' },
    { label: 'Bosnia and Herzegovina', dialCode: '+387', iso2: 'BA' },
    { label: 'Botswana', dialCode: '+267', iso2: 'BW' },
    { label: 'Brazil', dialCode: '+55', iso2: 'BR' },
    { label: 'Brunei', dialCode: '+673', iso2: 'BN' },
    { label: 'Bulgaria', dialCode: '+359', iso2: 'BG' },
    { label: 'Burkina Faso', dialCode: '+226', iso2: 'BF' },
    { label: 'Burundi', dialCode: '+257', iso2: 'BI' },
  
    { label: 'Cambodia', dialCode: '+855', iso2: 'KH' },
    { label: 'Cameroon', dialCode: '+237', iso2: 'CM' },
    { label: 'Canada', dialCode: '+1', iso2: 'CA' },
    { label: 'Cape Verde', dialCode: '+238', iso2: 'CV' },
    { label: 'Central African Republic', dialCode: '+236', iso2: 'CF' },
    { label: 'Chad', dialCode: '+235', iso2: 'TD' },
    { label: 'Chile', dialCode: '+56', iso2: 'CL' },
    { label: 'China', dialCode: '+86', iso2: 'CN' },
    { label: 'Colombia', dialCode: '+57', iso2: 'CO' },
    { label: 'Comoros', dialCode: '+269', iso2: 'KM' },
    { label: 'Congo', dialCode: '+242', iso2: 'CG' },
    { label: 'Costa Rica', dialCode: '+506', iso2: 'CR' },
    { label: 'Croatia', dialCode: '+385', iso2: 'HR' },
    { label: 'Cuba', dialCode: '+53', iso2: 'CU' },
    { label: 'Cyprus', dialCode: '+357', iso2: 'CY' },
    { label: 'Czech Republic', dialCode: '+420', iso2: 'CZ' },
  
    { label: 'Denmark', dialCode: '+45', iso2: 'DK' },
    { label: 'Djibouti', dialCode: '+253', iso2: 'DJ' },
    { label: 'Dominica', dialCode: '+1-767', iso2: 'DM' },
    { label: 'Dominican Republic', dialCode: '+1-809', iso2: 'DO' },
  
    { label: 'Ecuador', dialCode: '+593', iso2: 'EC' },
    { label: 'Egypt', dialCode: '+20', iso2: 'EG' },
    { label: 'El Salvador', dialCode: '+503', iso2: 'SV' },
    { label: 'Estonia', dialCode: '+372', iso2: 'EE' },
    { label: 'Ethiopia', dialCode: '+251', iso2: 'ET' },
  
    { label: 'Finland', dialCode: '+358', iso2: 'FI' },
    { label: 'France', dialCode: '+33', iso2: 'FR' },
  
    { label: 'Georgia', dialCode: '+995', iso2: 'GE' },
    { label: 'Germany', dialCode: '+49', iso2: 'DE' },
    { label: 'Ghana', dialCode: '+233', iso2: 'GH' },
    { label: 'Greece', dialCode: '+30', iso2: 'GR' },
    { label: 'Guatemala', dialCode: '+502', iso2: 'GT' },
  
    { label: 'Hong Kong', dialCode: '+852', iso2: 'HK' },
    { label: 'Hungary', dialCode: '+36', iso2: 'HU' },
  
    { label: 'Iceland', dialCode: '+354', iso2: 'IS' },
    { label: 'India', dialCode: '+91', iso2: 'IN' },
    { label: 'Indonesia', dialCode: '+62', iso2: 'ID' },
    { label: 'Iran', dialCode: '+98', iso2: 'IR' },
    { label: 'Iraq', dialCode: '+964', iso2: 'IQ' },
    { label: 'Ireland', dialCode: '+353', iso2: 'IE' },
    { label: 'Israel', dialCode: '+972', iso2: 'IL' },
    { label: 'Italy', dialCode: '+39', iso2: 'IT' },
  
    { label: 'Japan', dialCode: '+81', iso2: 'JP' },
    { label: 'Jordan', dialCode: '+962', iso2: 'JO' },
  
    { label: 'Kazakhstan', dialCode: '+7', iso2: 'KZ' },
    { label: 'Kenya', dialCode: '+254', iso2: 'KE' },
    { label: 'Kuwait', dialCode: '+965', iso2: 'KW' },
    { label: 'Kyrgyzstan', dialCode: '+996', iso2: 'KG' },
  
    { label: 'Laos', dialCode: '+856', iso2: 'LA' },
    { label: 'Latvia', dialCode: '+371', iso2: 'LV' },
    { label: 'Lebanon', dialCode: '+961', iso2: 'LB' },
    { label: 'Lithuania', dialCode: '+370', iso2: 'LT' },
    { label: 'Luxembourg', dialCode: '+352', iso2: 'LU' },
  
    { label: 'Malaysia', dialCode: '+60', iso2: 'MY' },
    { label: 'Maldives', dialCode: '+960', iso2: 'MV' },
    { label: 'Mexico', dialCode: '+52', iso2: 'MX' },
    { label: 'Mongolia', dialCode: '+976', iso2: 'MN' },
    { label: 'Morocco', dialCode: '+212', iso2: 'MA' },
  
    { label: 'Nepal', dialCode: '+977', iso2: 'NP' },
    { label: 'Netherlands', dialCode: '+31', iso2: 'NL' },
    { label: 'New Zealand', dialCode: '+64', iso2: 'NZ' },
    { label: 'Nigeria', dialCode: '+234', iso2: 'NG' },
    { label: 'Norway', dialCode: '+47', iso2: 'NO' },
  
    { label: 'Pakistan', dialCode: '+92', iso2: 'PK' },
    { label: 'Philippines', dialCode: '+63', iso2: 'PH' },
    { label: 'Poland', dialCode: '+48', iso2: 'PL' },
    { label: 'Portugal', dialCode: '+351', iso2: 'PT' },
  
    { label: 'Qatar', dialCode: '+974', iso2: 'QA' },
  
    { label: 'Romania', dialCode: '+40', iso2: 'RO' },
    { label: 'Russia', dialCode: '+7', iso2: 'RU' },
  
    { label: 'Saudi Arabia', dialCode: '+966', iso2: 'SA' },
    { label: 'Singapore', dialCode: '+65', iso2: 'SG' },
    { label: 'South Africa', dialCode: '+27', iso2: 'ZA' },
    { label: 'South Korea', dialCode: '+82', iso2: 'KR' },
    { label: 'Spain', dialCode: '+34', iso2: 'ES' },
    { label: 'Sweden', dialCode: '+46', iso2: 'SE' },
    { label: 'Switzerland', dialCode: '+41', iso2: 'CH' },
  
    { label: 'Taiwan', dialCode: '+886', iso2: 'TW' },
    { label: 'Thailand', dialCode: '+66', iso2: 'TH' },
    { label: 'Turkey', dialCode: '+90', iso2: 'TR' },
  
    { label: 'Ukraine', dialCode: '+380', iso2: 'UA' },
    { label: 'United Arab Emirates', dialCode: '+971', iso2: 'AE' },
    { label: 'United Kingdom', dialCode: '+44', iso2: 'GB' },
    { label: 'United States', dialCode: '+1', iso2: 'US' },
  
    { label: 'Vietnam', dialCode: '+84', iso2: 'VN' },
  
    { label: 'Yemen', dialCode: '+967', iso2: 'YE' },
  
    { label: 'Zambia', dialCode: '+260', iso2: 'ZM' },
    { label: 'Zimbabwe', dialCode: '+263', iso2: 'ZW' },
  ];
  