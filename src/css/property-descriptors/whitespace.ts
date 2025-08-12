import { IPropertyIdentValueDescriptor, PropertyDescriptorParsingType } from '../IPropertyDescriptor';
import { Context } from '../../core/context';

export const enum WHITE_SPACE {
    NORMAL = 0,
    NOWRAP = 1,
    PRE = 2,
    PRE_WRAP = 3,
    PRE_LINE = 4,
    BREAK_SPACES = 5
}

export const whiteSpace: IPropertyIdentValueDescriptor<WHITE_SPACE> = {
    name: 'white-space',
    initialValue: 'normal',
    prefix: false,
    type: PropertyDescriptorParsingType.IDENT_VALUE,
    parse: (_context: Context, whiteSpace: string) => {
        switch (whiteSpace) {
            case 'nowrap':
                return WHITE_SPACE.NOWRAP;
            case 'pre':
                return WHITE_SPACE.PRE;
            case 'pre-wrap':
                return WHITE_SPACE.PRE_WRAP;
            case 'pre-line':
                return WHITE_SPACE.PRE_LINE;
            case 'break-spaces':
                return WHITE_SPACE.BREAK_SPACES;
            case 'normal':
            default:
                return WHITE_SPACE.NORMAL;
        }
    }
};
