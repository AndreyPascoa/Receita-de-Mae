import * as icons from 'lucide-react-native/icons' 
import { FilterIcons } from './filterType';

export interface CardsType {
    id: string;
    title: string;
    iconsFilters: FilterIcons[];
}