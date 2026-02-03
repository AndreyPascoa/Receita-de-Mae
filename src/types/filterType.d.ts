import * as icons from  'lucide-react-native/icons' 

export interface FilterType {
    id: string;
    name: string;
    isPressed?: boolean;
    icons?: keyof typeof icons;
}

export interface FilterComponentProps extends FilterType {
    onPress: () => void;
}