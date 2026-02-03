import * as icons from 'lucide-react-native/icons' 

export interface CardsType {
    id: string;
    title: string;
    iconsFilters: FilterIcons[keyof typeof icons][];
}

type FilterIcons = 'Beef' | 'Bird' | 'Fish' | 'Leaf';
