import { getRandomValueFromRecord } from './record';

const countryPangram = {
  en: 'The quick brown fox jumps over the lazy dog',
  uk: 'Pack my box with five dozen liquor jugs',
  fr: 'Portez ce vieux whisky au juge blond qui fume',
  de: 'Victor jagt zwölf Boxkämpfer quer über den großen Sylter Deich',
  es: 'Benjamín pidió una bebida de kiwi y fresa; Noé, en cambio, exigió más whisky',
  it: 'Quel vituperabile xenofobo zelante assaggia il whisky ed esclama: alleluia!',
  pt: 'Luís argúi que vê por cima do jazigo três cágados com fome',
  nl: "Pa's wijze lynx bezag vroom het fikse aquaduct",
  dk: 'Quizdeltagerne spiste jordbær med fløde, mens cirkusklovnen Walther spillede på xylofon',
  se: 'Yxskaftbud, ge vår WC-zonmö IQ-hjälp',
  no: 'Vår sære Zulu fra badeøya spilte jo whist og quickstep i min taxi',
  fi: 'Albert osti fagotin ja töräytti puhkuvan melodian',
  ru: 'Съешь же ещё этих мягких французских булок, да выпей чаю',
  pl2: 'Pchnąć w tę łódź jeża lub ośm skrzyń fig',
  pl: 'Zażółć gęślą jaźń',
  cz: 'Příliš žluťoučký kůň úpěl ďábelské ódy',
  hu: 'Árvíztűrő tükörfúrógép',
  gr: 'Ξεσκεπάζω την ψυχοφθόρα βδελυγμία',
  tr: 'Vazife borcu bu: hücreye giden psikiyatri profesörü',
  ro: 'Muzicologă în bej vând whisky și tequila, preț fix',
  jp: 'いろはにほへとちりぬるを',
} as const;

export const getRandomPangram = () => getRandomValueFromRecord(countryPangram);
export const getPangram = (key: keyof typeof countryPangram) => countryPangram[key];
