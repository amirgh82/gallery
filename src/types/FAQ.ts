export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'store' | 'order' | 'shipping' | 'payment';
}
