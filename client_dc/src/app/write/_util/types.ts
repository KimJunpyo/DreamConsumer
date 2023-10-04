export type writeData = {
  itemName: string;
  imageUrl: string | null | undefined;
  price: number;
  tags: string[];
  currentMoney: number;
  cycle: string;
  unitAmount: number;
  autoUpdate: boolean;
  groupPurchase: boolean;
  itemURL: string;
  lowerPriceSearch: boolean;
};

export type ImageBoxProps = {
  imageUrl: string | null | undefined;
  setImageUrl: React.Dispatch<React.SetStateAction<string | null | undefined>>;
};

export type LabelProps = {
  children: React.ReactNode;
};

export type WriteButtonProps = {
  children: string;
  click: boolean;
  width: string;
  height: string;
  rounded?: string;
  icon?: string;
  handler: () => void;
};

export type ItemListType = 'redSmall' | 'purpleSmall' | 'greenSmall';
